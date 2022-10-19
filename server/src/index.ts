import express from "express";
import dotenv from "dotenv";
import db from "./db/db";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/user", async (req, res, next) => {
  await db('users').insert({
    name: "Sasha",
  });
  return res.status(200).json({ message: "Ok!!" });
});

app.get("/users", async (req, res, next) => {
  const users = await db('users');
  return res.status(200).json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is start on PORT ${PORT}`);
});
