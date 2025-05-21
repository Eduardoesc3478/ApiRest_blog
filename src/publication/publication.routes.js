import { Router } from "express";
import { addPublication, getPublications } from "./publication.controller.js";
import { addPublicationValidator } from "../middlewares/publication-validator.js";

const router = Router();

/**
 * @swagger
 * /publication/addPublication:
 *   post:
 *     summary: Agrega una nueva publicación
 *     tags: [Publication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *               - class
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la publicación
 *                 example: "Bienvenida"
 *               text:
 *                 type: string
 *                 description: Contenido de la publicación
 *                 example: "Bienvenidos al sistema educativo."
 *               class:
 *                 type: string
 *                 description: Categoría de la publicación
 *                 example: "TECNOLOGIA"
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *       400:
 *         description: Datos inválidos o faltantes
 *       401:
 *         description: Usuario no autenticado o sin permisos
 *       500:
 *         description: Error interno del servidor
 *     x-roles-allowed:
 *       - ADMIN_ROLE
 */
router.post("/addPublication", addPublicationValidator, addPublication);

/**
 * @swagger
 * /publication/:
 *   get:
 *     summary: Obtiene todas las publicaciones
 *     tags: [Publication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 *       500:
 *         description: Error interno del servidor
 *     x-roles-allowed:
 *       - USER_ROLE
 *       - ADMIN_ROLE
 */
router.get("/", getPublications);

export default router;