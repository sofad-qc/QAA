#!/bin/bash
# Script pour automatiser les commandes Git courantes
git status
git add .
read -p "Entrez le message de commit : " commit_message
git commit -m "$commit_message"
read -p "Entrez le nom de la branche à pousser (par défaut : main) : " branch_name
branch_name=${branch_name:-main}
git push origin "$branch_name"