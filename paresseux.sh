#!/bin/bash

# Affiche le statut Git
git status

# Ajoute tous les fichiers modifiés
git add .

# Demande le message de commit
read -p "Entrez le message de commit : " commit_message

# Effectue le commit
git commit -m "$commit_message"

# Demande la branche à pousser
read -p "Entrez le nom de la branche à pousser (par défaut : main) : " branch_name

# Si l'utilisateur ne saisit rien, utiliser 'main'
branch_name=${branch_name:-main}

# Pousse sur la branche choisie
git push origin "$branch_name"