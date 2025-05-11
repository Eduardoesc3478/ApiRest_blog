
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

   export const getPublicationsByDateAndClass = async (req, res) => {
    const { limite = 10, desde = 0, ordenFecha = 'asc', ordenClase = 'asc' } = req.query;

    try {
        // Construir el criterio de ordenamiento
        const sortCriteria = {
            createdAt: ordenFecha === 'asc' ? 1 : -1, // Ordenar por fecha
            class: ordenClase === 'asc' ? 1 : -1     // Ordenar por clase
        };

        const publications = await Publication.find()
            .sort(sortCriteria) // Aplicar el ordenamiento
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
            message: 'Error al obtener las publicaciones',
            error: error.message
        });
    }
};

export const getPublicationById = async (req, res) => {
    try {
        const { id } = req.params;

        const publication = await Publication.findById(id);
        if (!publication) {
            return res.status(404).json({
                success: false,
                message: 'La publicación no existe',
            });
        }

        res.status(200).json({
            success: true,
            publication
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener la publicación',
            error: error.message
        });
    }
}

