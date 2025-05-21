import { Router } from "express";
import { addComment, getAllComments } from "./comment.controller.js";
import { addCommentValidator } from "../middlewares/comment-validator.js";

const router = Router();

/**
 * @swagger
 * /comment/addComment:
 *   post:
 *     summary: Agrega un nuevo comentario a una publicación
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - postId
 *             properties:
 *               content:
 *                 type: string
 *                 description: Contenido del comentario
 *                 example: "Muy buena publicación"
 *               postId:
 *                 type: string
 *                 description: ID de la publicación (ObjectId de MongoDB)
 *                 example: "665c15e2219f1afe562fc111"
 *     responses:
 *       200:
 *         description: Comentario agregado exitosamente
 *       400:
 *         description: Faltan datos requeridos o datos inválidos
 *       401:
 *         description: Usuario no autenticado
 *       500:
 *         description: Error interno del servidor
 *     x-roles-allowed:
 *       - USER_ROLE
 *       - ADMIN_ROLE
 */
router.post("/addComment", addCommentValidator, addComment);

/**
 * @swagger
 * /comment/:
 *   get:
 *     summary: Obtiene todos los comentarios
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de comentarios
 *       500:
 *         description: Error interno del servidor
 *     x-roles-allowed:
 *       - USER_ROLE
 *       - ADMIN_ROLE
 */
router.get("/", getAllComments);

export default router;