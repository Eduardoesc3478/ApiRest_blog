import { Router } from "express";
import { addPublication, getPublications ,getPublicationsByDateAndClass, getPublicationById } from "./publication.controller.js";
import { addPublicationValidator } from "../middlewares/publication-validator.js";


const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);


router.get("/", getPublications)


router.get("/:id", getPublicationById)


router.get("/orderPublications", getPublicationsByDateAndClass)

export default router;