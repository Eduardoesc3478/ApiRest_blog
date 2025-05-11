import {Router} from "express";
import {addComment, getAllComments} from "./comment.controller.js";
import {addCommentValidator } from "../middlewares/comment-validator.js";


const router = Router();

router.post("/addComment/",addCommentValidator,  addComment);

router.get("/", getAllComments); 

export default router;