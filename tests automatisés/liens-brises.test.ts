import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // ✅ Import nécessaire
import { defineConfig } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
  timeout: 300_000,
  use: {
    trace: 'on',
  },
  testDir: './e2e',
});


const baseUrl = 'http://localhost:8000/';
const visited = new Set<string>();
const brokenLinks: Record<string, { link: string; status: number }[]> = {};

// Fonction pour exclure certains chemins
function isExcluded(link: string): boolean {
  return link.includes('/store');
}

test('Check for broken links and generate report', async ({ page, request }) => {
  test.slow
    test.setTimeout(300_000); // 5 minutes

  const queue: string[] = [baseUrl];

  while (queue.length > 0) {
    const currentUrl = queue.shift();
    if (!currentUrl || visited.has(currentUrl) || isExcluded(currentUrl)) continue;

    visited.add(currentUrl);
    console.log(`Visiting: ${currentUrl}`);

    try {
      const response = await page.goto(currentUrl);
      const status = response?.status() ?? 0;

      if (status >= 400) {
        brokenLinks[currentUrl] = [{ link: currentUrl, status }];
        continue;
      }

      const links = await page.$$eval('a[href]', anchors =>
        anchors.map(a => (a as HTMLAnchorElement).href)
      );

      for (const link of links) {
        if (link.startsWith(baseUrl) && !visited.has(link) && !isExcluded(link)) {
          queue.push(link);
        }

        if (!isExcluded(link)) {
          try {
            const res = await request.get(link);
            if (res.status() >= 400) {
              brokenLinks[currentUrl] = brokenLinks[currentUrl] || [];
              brokenLinks[currentUrl].push({ link, status: res.status() });
            }
          } catch {
            brokenLinks[currentUrl] = brokenLinks[currentUrl] || [];
            brokenLinks[currentUrl].push({ link, status: 0 });
          }
        }
      }
    } catch {
      brokenLinks[currentUrl] = [{ link: currentUrl, status: 0 }];
    }
  }

  // Génération du rapport Markdown
  const reportPath = path.join(__dirname, 'broken_links_report.md');
  const lines: string[] = ['# 🔗 Rapport des liens brisés\n'];

  for (const [source, links] of Object.entries(brokenLinks)) {
    lines.push(`## Page source : ${source}`);
    for (const { link, status } of links) {
      lines.push(`- ❌ ${link} → Statut HTTP: ${status}`);
    }
    lines.push('');
  }

  fs.writeFileSync(reportPath, lines.join('\n'), 'utf-8');
  console.log(`✅ Rapport généré : ${reportPath}`);
});
