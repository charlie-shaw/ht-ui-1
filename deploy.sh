rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add -A &&
git commit -m "update" &&
git remote add origin git@github.com:charlie-shaw/HotUI.git &&
git push -f -u origin master &&
cd -
