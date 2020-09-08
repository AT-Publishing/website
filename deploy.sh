mv -f _site/ _prev/
bundle exec jekyll b
diff -qr _site/ _prev/
read -p "Deploy? [y/n]" yn
case $yn in
        [Yy]* ) git add . --all && git commit -m "autopublish rpc" && git push origin master;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
esac
rm -rf _prev/
echo "done."

