import { Router } from "express";
import { CEPQuery } from "../controller/cepController.js";

const router = Router();

router.post("/cep", CEPQuery);

export default router;
