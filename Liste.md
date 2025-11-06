# Assurance qualité & Accessibilité

## Contenu

- [ ] La première occurrence d'une abréviation ou d'un acronyme dans le corps de chaque page donne accès à sa signification. [Entrée wiki](https://github.com/sofad-qc/QAA/wiki/Contenus#premi%C3%A8re-occurrence-dune-abr%C3%A9viation)
- [ ] Un lexique ou un glossaire adapté au public explique le vocabulaire sectoriel et technique.
- [ ] La page des résultats de recherche indique le nombre de résultats trouvés et le nombre de résultats par page.
- [ ] Les nouveaux contenus sont facilement identifiables à partir de la page d'accueil. [Entrée wiki](https://github.com/sofad-qc/QAA/wiki/Contenus#les-nouveaux-contenus-sont-facilement-identifiables-%C3%A0-partir-de-la-page-daccueil:~:text=Contenus-,Les%20nouveaux%20contenus%20sont%20facilement%20identifiables%20%C3%A0%20partir%20de%20la%20page%20d%27accueil.,-Add%20a%20custom)
- [ ] Les informations relatives aux droits d'auteur sont disponibles depuis toutes les pages.
  
## Formulaires

- [ ] La page affichée suite à l'envoi du formulaire permet de reprendre directement la navigation.
- [ ] Les listes d'options de formulaires sont présentées dans un ordre identifiable.
- [ ] Les différents types de champs de saisie sont identifiés (email, password, number, tel).
- [ ] Permettre la détection automatique des erreurs et une description textuelle de l'erreur.
- [ ] Proposer des suggestions pour corriger les erreurs de saisie, à moins que cela ne compromette la sécurité ou l'objectif.

[Exemples HTML](./exemples/html/formulaire.html)

## Identification et contact

- [ ] Le titre de chaque page est sous le format : `<title>Contenu de la page - Nom du site</title>`
- [ ] Chaque page contient un appel valide à une icône de favori.
- [ ] L'adresse complète et les numéros de téléphone sont disponibles depuis toutes les pages du site.0
- [ ] Le site propose au moins deux moyens de contact.
- [ ] Le délai de réponse est indiqué.
- [ ] Chaque demande d'information émet un accusé de réception.
- [ ] L'identité de la personne ou du service responsable du contenu est indiqué.

## Images et médias

- [ ] Le rôle des images décoratives est déclaré explicitement.
- [ ] Les images complexes fournissent une descrition longue pour mieux en saisir le sens.
- [ ] Les thumbnails ne sont pas des images redimentionées côté client.
- [ ] Les vidéos et les audios sont toujours déclanchés par l'utilisateurice.
- [ ] Pour les contenus mobiles, clignotants, défilants ou à mise à jour automatique, les utilisateurs doivent pouvoir les mettre en pause, les arrêter ou les masquer.
- [ ] Les fichiers audio répondent à ces critères : 48 000 Hz, Stéréo, 256 kbps
- [ ] Les fichiers vidéo sont enregistrés en format MP4 (H.264), codec audio AAC
- [ ] Proposer des alternatives pour les supports audio ou vidéo préenregistrés.
- [ ] Fournir des sous-titres pour les contenus préenregistrés.
- [ ] Ne pas utiliser des images de texte.

[Exemples HTML](./exemples/html/images.html)

## Liens

- [ ] Ajouter un intitulé textuel aux liens.
- [ ] L'intitulé décrit la fonction du lien.
- [ ] Les liens de même nature ont des couleurs, formes et comportements qui sont identiques sur toutes les pages.
- [ ] Le soulignement est réservé aux liens.
- [ ] Les liens se démarquent visuellement du reste du contenu.
- [ ] Un style différent est appliqué aux liens visités.
- [ ] Les liens externes et internes sont différenciés.
- [ ] Les liens qui lancent un logiciel différent ont un libellé explicite.
- [ ] Les numéros de téléphone sont activables via le protocole approprié.
- [ ] Le format et la taille des fichiers proposés en téléchargement sont indiqués.
- [ ] Tous les liens internes du site sont valides.

[Exemples HTML](./exemples/html/liens.html)

## Navigation

- [ ] Il est possible de revenir à la page d'accueil depuis toutes les pages.
- [ ] Fil d'arianne: Chaque page affiche une information permettant de connaître son emplacement dans l'arborescence du site.
- [ ] Les items actifs de menu sont signalés.
- [ ] Les blocs de navigation de même nature sont affichés aux mêmes emplacements sur toutes les pages.
- [ ] Les icônes de navigation sont accompagnées d'une légende explicite.
- [ ] Les fenêtres modales sont dotées d'un bouton de fermeture et un intitulé explicite.
- [ ] Le site permet la navigation au clavier et elle s'effectue dans un ordre prévisible.
- [ ] Le focus clavier n'est ni supprimé ni masqué.

[Exemples HTML](./exemples/html/navigation.html)

## Présentation & Interface

- [ ] La charte graphique est conhérente et constante.
- [ ] Ne pas dépendre uniquement à des caractéristiques sensorielles (forme, couleur, son) pour donner des instructions ou trasmettre des informations.
- [ ] Les contenus, textes et images, sont présentés avec un contraste suffisant avec l'arrière-plan (4.5:1)
- [ ] Les éléments non textuels présentent un rapport de contraste d'au moins 3:1 par rapport aux couleurs adjacentes.
- [ ] La taille des éléments cliquables est suffisante (minimum: 44px X 44px).
- [ ] Les styles ne justifient pas le texte.
- [ ] Les mises en majuscules à des fins décoratives sont effectuées à l'aide des styles. Ex : `text-transform: uppercase;`
- [ ] La structure et les relations du contenu sont clairement codées ou disponibles sous forme de texte pour les technologies d'assistance.
- [ ] Le contenu suit un ordre de lecture logique que les technologies d'assistance peuvent interpréter correctement.
- [ ] Le contenu doit être utilisable dans les deux orientations, portrait et paysage, sauf si l'une d'entre elles est essentielle.
- [ ] Permettre de redimensionner le texte jusqu'à 200% sans perte de contenu ou de fonctionnalité.
- [ ] Prévenir les pièges à clavier et veiller à ce que l'attention puisse être déplacée à l'aide du clavier.
- [ ] Si les raccourcis clavier utilisent des caractères, les utilisateurs doivent pouvoir les désactiver, les remapper ou les éviter.
- [ ] Veiller à ce que les éléments focalisables soient mis en évidence dans un ordre logique qui préserve le sens et la fonctionnalité.
- [ ] Fournir plusieurs moyens de localiser une page dans un ensemble de pages, à l'exception des étapes du processus.
- [ ] Les titres et les étiquettes décrivent clairement leur sujet ou leur objectif.
- [ ] La langue par défaut de la page web est identifiable par programmation.
- [ ] La langue de chaque passage ou phrase est identifiable dans le code, à l'exception des noms propres et des termes techniques.
- [ ] Si l'utilisateurice change un réglage dans l'interface (langue, thème, ou taille du texte), ça ne pas déclenche pas d'autres changements sans prévenir l'utilisateur.
- [ ] L'ordre de navigation est cohérent d'une page à l'autre.
- [ ] Maintenir une identification cohérente pour les composants ayant la même fonction.
- [ ] S'assurer que les éléments aient des balises complètes, qu'ils soient correctement imbriqués, qu'ils aient des identifiants uniques.
- [ ] Rendre les noms, les rôles, les états et les valeurs des composants de l'interface utilisateur accessibles par programme.
- [ ] Les messages d'état (alert) doivent être détectés de manière programmatique par les agents utilisateurs et les technologies d'assistance, et sont accessibles sans focalisation.

## Sécurité & données personnelles

- [ ] Les pages utilisent le protocole HTTPS et ne proposent pas de ressources http.
- [ ] Mot de passe
  - Les mots de passe peuvent être choisis ou changés par l'utilisateur.
  - Un dispositif sensibilise l'utilisateur sur le degré de sécurisation du mot de passe qu'il choisit.
  - Le mot de passe peut être vu "en clair".
- [ ] La politque de confidentialité et vie privée est disponible depuis toutes les pages (dans le pied de page).
- [ ] Les en-têtes retournés spécifient la politique de communication des referrers. Ex : `<meta name="referrer" content="strict-origin-when-cross-origin">`
- [ ] Les liens externes qui ouvrent une nouvelle fenêtre ne partagent pas d'information de contexte. Ex : `target="_blank" rel="noopener noreferrer"`
- [ ] Les objectifs et limitations lors d'un refus pour les cookies sont expliqués.

## Commerce

<details>
  <summary>Si applicable</summary>

- [ ] Possible d'acheter sans création de compte.
- [ ] Le détail des articles qui sont dans le panier sont disponible à même le panier.
- [ ] Le délai de livraison est indiqué avant la validation finale de la commande.
- [ ] Les frais de livraison sont indiqués avant la validation finale de la commande.
- [ ] Les modalités de récupération d'une clé d'accès sont précisées avant la commande.
- [ ] Le panier permet de modifier la quantité des articles, l'ajout ou la supression avant la validation finale de la commande.
- [ ] La fiche produit comporte toutes les caractéristiques quantifiables.
- [ ] Le sous-total détaillé est indiqué avant la validation finale de la commande.
- [ ] Les conditions de garantie et du service après-vente sont clairement indiquées.
- [ ] Les moyens de paiement acceptés et les procédures sont indiqués.
- [ ] L'identité des prestataires impliqués dans les transactions est précisée.
- [ ] L'adresse et les conditions de retour sont indiquées.
- [ ] Les conditions de remboursement sont indiquées.
- [ ] Les prix affichés mentionnent le détail des taxes et le prix sans taxe.
- [ ] Les produits indisponibles font l'objet d'une différenciation visuelle **et** textuelle.

</details>

---

### Références

- [OpQuast](https://checklists.opquast.com/en/web-quality-assurance/)
- [W3C WCAG](https://www.w3.org/TR/2006/WD-WCAG20-20060427/appendixB.html)
- [Traduction française des critères AA](https://innowise.com/fr/blog/wcag-21-aa/)