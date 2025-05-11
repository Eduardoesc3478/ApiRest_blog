import Comment from "./comment.model.js";

export const addComment = async (req, res) => {
    try {
        const { content, postId, userName  } = req.body; 
         

        

        
        if (!content || !postId || !userName) {
            return res.status(400).json({
                success: false,
                message: 'Faltan datos requeridos (content o postId)'
            });
        }

        
        const comment = new Comment({
            content,
            postId,
            userName,
        });

        
        await comment.save();

        
        res.status(200).json({
            success: true,
            comment
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: 'Error al guardar el comentario',
            error: error.message
        });
    }
};


export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
            .populate('userName', 'name surname username email phone') 
            .populate({
                path: 'postId', 
                select: 'title' 
            })
            .sort({ createdAt: -1 }); 

        res.status(200).json({
            success: true,
            comments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener todos los comentarios',
            error: error.message
        });
    }
};

