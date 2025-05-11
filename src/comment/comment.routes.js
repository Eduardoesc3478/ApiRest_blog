import {Router} from "express";
import {addComment, getComments, getAllComments} from "./comment.controller.js";
import {addCommentValidator } from "../middlewares/comment-validator.js";


const router = Router();

router.post("/addComment/",addCommentValidator,  addComment);

router.get("/:postId", getComments);

router.get("/", getAllComments); 

export default router;