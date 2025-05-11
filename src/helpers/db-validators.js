import Publication from "../publication/publication.model.js"
import Comment from "../comment/comment.model.js"




export const publicationExists = async (pid = "") => {
    const existe = await Publication.findOne({pid})
    if(existe){
        throw new Error(`The username ${pid} is already registered`)
    }
}


export const commentExists = async (cid = "") => {
    const existe = await Comment.findOne({cid})
    if(existe){
        throw new Error(`The username ${cid} is already registered`)
    }
}



