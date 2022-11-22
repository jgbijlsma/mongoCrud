const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://mongo:kvD7SfCpq7fPkbpGMwBN@containers-us-west-121.railway.app:6696"
);

let dbConnection;

function connectToDb(callback) {
  client.connect().then((connection) => {
    dbConnection = connection.db("mongoLes");
    callback();
  });
}

function getDb() {
  return dbConnection;
}

module.exports = {
  getDb,
  connectToDb,
};
