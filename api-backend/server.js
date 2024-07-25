import { config } from "dotenv";
import express, { json } from "express";
import {
  mongoConnect,
  mongoDCListner,
  mongoErrorListner,
} from "./db/db.connection.js";
import { TodoRouter } from "./routes/todo.router.js";

config();

const app = express();

app.use(json());

mongoDCListner();
mongoErrorListner();
await mongoConnect();

app.use("/todos", TodoRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    answer: "Page not found!",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    code: 500,
    answer: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Up at PORT 3055.`);
});
