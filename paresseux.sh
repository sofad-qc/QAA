#!/bin/bash

git status
git add .
read -p "Entrez le message de commit : " commit_message
git commit -m "$commit_message"
git push origin main
