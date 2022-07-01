# Simple todo list project

To start the project you will need Docker and docker-compose we recommend you use linux although it is not necessary.


First build with docker by navigating to the root directory of the project and running.
```bash
sudo docker-compose build
```

Now run the application.
```
sudo docker-compose up
```

This will start containers for mongodb, frontend and backend.

This application frontend if accessible at `http://localhost:8000/` and the backend at `http://localhost:8001/`

To stop the app press `Ctrl + C` and wait for all the containers to stop.+

## If you don't want to use sudo
Source: https://docs.docker.com/engine/install/linux-postinstall/
```sh
sudo groupadd docker
sudo usermod -aG docker $USER
```
 
# IMPORTANT: How install extra dependencies:

Is important that you install all dependencies inside the running docker containers, do not install from the host, this can cause problems with node_module compatibility.

To run commands in a container paste the following in a terminal and make sure the containers are running.

```bash
docker exec -it demo-todo-frontend sh

# or

docker exec -it demo-todo-backend sh
```

# Useful links

[https://expressjs.com/](https://expressjs.com/)

[https://nextjs.org/](https://nextjs.org/)

[https://reactjs.org/](https://reactjs.org/)

[https://www.mongodb.com/docs/drivers/node/current/](https://www.mongodb.com/docs/drivers/node/current/)