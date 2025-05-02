import {Router} from "express";
import {addComment , updateComment, deleteComment} from "./comment.controller.js";
import {addCommentValidator, updateCommentValidator, deleteCommentValidator} from "../middlewares/comment-validator.js";


const router = Router();

router.post("/addComment",addCommentValidator,  addComment);


router.patch("/updateComment/:cid",updateCommentValidator, updateComment);


router.delete("/deleteComment/:cid",deleteCommentValidator, deleteComment);

export default router;