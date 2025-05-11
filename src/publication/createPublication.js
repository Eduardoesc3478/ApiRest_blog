import Publication from "../publication/publication.model.js";

export const addDefaultPublication = async () => {
    try {
        const publicationExists = await Publication.findOne({ title: "Bienvenida" });

        if (publicationExists) {
            console.log("Ya existe una publicación por defecto.");
            return;
        }

        const data = {
            title: "Bienvenida",
            text: "Bienvenidos al sistema educativo.",
            class: "TECNOLOGIA"
        };

        const newPublication = new Publication(data);
        await newPublication.save();

        console.log("Publicación por defecto creada exitosamente.");
    } catch (err) {
        console.error("Error al crear la publicación por defecto:", err.message);
    }
};
