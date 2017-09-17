# MongoDB with Mongoose Demo #

Demonstration of using the NoSQL database [MongoDB](https://www.mongodb.com/) with the [Mongoose](http://mongoosejs.com/) JavaScript library used to interact with Docker.

This demo uses [Docker](https://www.docker.com/) to install a temporary MongoDB database and clean up for it after the demo is completed. It assumes that Docker is installed locally.

To run the demo:
```
# Create a Docker container with MongoDB installed.
# In a command window type:
yarn docker-up


# Run the demo and remove the Docker container.
# In a second command window type:
yarn start

```
The demo inserts data from `users.json` into a MongoDB collection and queries the collection to make sure that the data has been created.
