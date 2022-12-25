import express from "express";
import dotenv from "dotenv";

// const router = new express.Router();

import connection from "./database/db.js";

import user from "./Schema/user.js";

import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

let port = process.env.PORT || 3001;
let url = process.env.URL;

connection(process.env.MONGODB_URI || url);

app.post("/add-user", async (req, res) => {
  console.log(req.body);
  await user.create(req.body);
  res.send({ response: "Success" });
});

app.get("/get-user", async (req, res) => {
  let data = await user.find();

  res.send(data);
});
app.delete("/remove-user/:id", async (req, res) => {
  let data = await user.findByIdAndDelete(req.params.id);

  res.send({ response: "Success" });
});
if (process.env.NODE_ENV == "production") {
  // app.use(Express.static(<));
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`your server is runnig at port ${port}`);
});
