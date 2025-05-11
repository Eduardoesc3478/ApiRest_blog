import { body, param } from "express-validator";
import { publicationExists,  } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";



export const addPublicationValidator = [
    
    body("title").notEmpty().withMessage("El título es requerido"),
    body("title").isLength({ max: 60}).withMessage("El título no puede exceder los 25 caracteres"),
    body("text").notEmpty().withMessage("El contenido de la publicación es requerido"),
    body("text").isLength({ max: 100 }).withMessage("El contenido no puede exceder los 100 caracteres"),

    validarCampos, 
    deleteFileOnError,
    handleErrors 
];





export const getPublicationByIdValidator = [
    
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(publicationExists),
    validarCampos,
    handleErrors
];