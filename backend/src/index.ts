import express from "express";
import config from "./config.ts/config";
import cepRouter from "./route/cep";

const app = express();
app.use(express.json());

app.use("/local", cepRouter);

app.listen(config.server.port, () => {
  console.log(`Running in port ${config.server.port}`);
});
