#!/bin/sh
# Commit mesage

if [ -z "$1" ]; then
 echo "Submit a commit message you uncultured swine!"
 exit
fi
echo " === [1] build"
BUNDLE_GEMFILE='./Gemfile' bundle exec jekyll b --source ./ --destination ./_site

echo " === [2] push"
git add .
git commit -m "$1"
git push origin master

#exit
echo " === [3] publish"
scp -r ./_site/* sgp:/var/www/atnet/
