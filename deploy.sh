rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add -A &&
git commit -m "update" &&
git remote add origin git@github.com:1186549058/HotUI.git &&
git push -f -u origin master &&
cd -
