
import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try {

        const { user } = req;

        const data = req.body;

        const publication = new Publication(data);
        await publication.save();

        res.status(200).json({
            success: true,
            publication
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar la publicación',
            error: error.message
        });
    }
};

export const getPublications = async (req, res) => {
    const { limite = 10, desde = 0 } = req.query;
    
       try {
           const publications = await Publication.find()
               .skip(Number(desde))
               .limit(Number(limite));
    
           const total = await Publication.countDocuments();
    
           res.status(200).json({
               success: true,
               total,
               publications
           });
       } catch (error) {
           res.status(500).json({
               success: false,
               message: 'Error al obtener las categorías',
               error
           });
       }
   };

   


