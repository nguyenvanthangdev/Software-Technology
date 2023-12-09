import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import intWebRoutes from "./routes/web";
import connectDB from "./config/connect";
import cors from "cors";
require("dotenv").config();
let app = express();
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
intWebRoutes(app);
connectDB();
let port = process.env.PORT;
app.listen(port, () => {
  console.log(">>> Backend Nodejs port : " + port + " <<<");
});
