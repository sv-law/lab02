Without Docker compose:

docker build --tag=fortune-cookie .
docker run --rm -it -p 80:3000 fortune-cookie

- Allows the usage of `localhost` in web browser without specifying port,
otherwise use:

docker run --rm -it -p 3000:3000 fortune-cookie


With Docker compose:

(Check config)

docker compose build

docker compose up


"It is not necessary to run docker-compose build again until the image needs to change. Besides build and up,
Docker Compose has another useful command called run. This will start a new service instance and run the
command specified. For example, if we wanted to run fortune directly, we could do so."
docker compose run --rm web fortune
"This command will run the command fortune inside a web container, replacing the CMD line defined in the
Dockerfile. The --rm option removes the container once it exits."

Git notes:

git remote -v

git remote add origin http://github.com/USERNAME/REPO.git

git fetch origin

git rebase origin/master

git push origin master