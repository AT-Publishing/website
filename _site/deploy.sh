mv -f _site/ _prev/
bundle exec jekyll b
diff -qr _site/ _prev/
read -p "Deploy? [y/n]" yn
case $yn in
        [Yy]* ) git add . --all && git commit "autopublish rpc" && git push origin master; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
esac
rm -f _prev/
