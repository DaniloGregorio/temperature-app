import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || "3000";

const SERVER = {
  port: PORT,
};

const config = {
  server: SERVER,
};

export default config;
