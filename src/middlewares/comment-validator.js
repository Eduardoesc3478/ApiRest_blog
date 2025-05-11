import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";



export const addCommentValidator = [

    body("userName").notEmpty().withMessage("El usuario es requerido"),
    body("content").notEmpty().withMessage("El comentario es requerido"),
    body("content").isLength({ min: 5 }).withMessage("El comentario debe tener al menos 5 caracteres"),
    body("content").isLength({ max: 1000 }).withMessage("El comentario debe tener máximo 1000 caracteres"),
    body("postId").notEmpty().withMessage("El post es requerido"),
    body("postId").isMongoId().withMessage("El post no es válido"),
    validarCampos,
    deleteFileOnError,
    handleErrors
];








