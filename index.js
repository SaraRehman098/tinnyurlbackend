import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDb } from "./utils/mongodb.js";
import URLroute from "./routes/urls.js";
import dns from "dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

ConnectMongoDb();

app.use("/", URLroute);

app.listen(5050, () => {
  console.log("server is running  good at port 5050");
});
