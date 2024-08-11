docker build --tag=fortune-cookie .

docker run --rm -it -p 80:3000 fortune-cookie
