const express = require("express");
const dbConnect = require("./db");

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Server started on port: " + port));

dbConnect.connectToDb(() => console.log("Connected to the database"));

app.post("/movies", async (req, res) => {
  const db = dbConnect.getDb();
  await db.collection("movies").insertOne(req.body);
  res.send("Created a movie");
});

app.get("/movies", async (req, res) => {
  const db = dbConnect.getDb();
  const movies = await db.collection("movies").find().toArray();
  res.send(movies);
});
