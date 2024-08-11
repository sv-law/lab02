docker build --tag=fortune-cookie .

docker run --rm -it -p 80:3000 fortune-cookie

Git notes:
git remote -v
git remote add origin http://github.com/USERNAME/REPO.git

git fetch origin
git rebase origin/master

git push origin master