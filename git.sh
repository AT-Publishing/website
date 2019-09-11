#!/bin/sh
# Commit mesage

if [ -z "$1" ]; then
 echo "Submit a commit message you uncultured swine!"
 exit
fi
bundle exec jekyll b
git add .
git commit -m "$1"
git push origin master
