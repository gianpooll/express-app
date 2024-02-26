import express from "express";
import { authController } from "../controllers/authControler.js";
import validacionBody from "../helpers/validacionesAuth.js";
import { validacionAuth } from "../middlewares/validacionAuth.js";

const router = express.Router();

router.post(
  "/login",
  validacionBody.login,
	validacionAuth,
  authController.login
);

router.post(
  "/register",
  validacionBody.registro,
  validacionAuth,
  authController.register
);

export default router;
