import { Router } from "express";
import { addPublication, getPublications  } from "./publication.controller.js";
import { addPublicationValidator } from "../middlewares/publication-validator.js";


const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);


router.get("/", getPublications)




export default router;