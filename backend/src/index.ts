import express from "express";
import cepRouter from "./route/cep.js";
import config from "./config/config.js";

const app = express();
app.use(express.json());

app.use("/Query", cepRouter);

app.listen(config.server.port, () => {
  console.log(`Running in port ${config.server.port}`);
});
