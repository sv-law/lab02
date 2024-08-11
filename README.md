Without Docker compose:
docker build --tag=fortune-cookie .
docker run --rm -it -p 80:3000 fortune-cookie
^ Allows the usage of `localhost` in web browser without specifying port,
otherwise use:
docker run --rm -it -p 3000:3000 fortune-cookie

With Docker compose:
(Check config)
docker compose build
docker compose up

Git notes:
git remote -v
git remote add origin http://github.com/USERNAME/REPO.git

git fetch origin
git rebase origin/master

git push origin master