import { Router } from "express";
import { addPublication, getPublications, updatePublication ,deletePublication,getPublicationsByDateAndClass } from "./publication.controller.js";
import { addPublicationValidator, updatePublicationValidator, deletePublicationValidator} from "../middlewares/publication-validator.js";

/**
 * @swagger
 * /addPublication:
 *   post:
 *     summary: Add a new publication
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Publication created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);


router.get("/", getPublications)


router.put("/updatePublication/:id", updatePublicationValidator, updatePublication )


router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication)


router.get("/orderPublications", getPublicationsByDateAndClass)

export default router;