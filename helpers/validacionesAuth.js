import { body } from "express-validator";

const validacionesBody = {
  login: [
    body("usuario", "Usuario Incorrecto").isString().trim().isLowercase(),
    body("password", "Contraseña de minimo 6 caracteres")
      .trim()
      .isLength({ min: 6 }),
  ],
  registro: [
    body("usuario", "Usuario Incorrecto").isString().trim().isLowercase(),
    body("password", "Contraseña de minimo 6 caracteres")
      .trim()
      .isLength({ min: 6 }),
    body("password", "Formato de contraseña incorrecto").custom(
      (value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("Las contraseñas no considen");
        }
        return value;
      }
    ),
  ],
};

export default validacionesBody;
