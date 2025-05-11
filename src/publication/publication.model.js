import { Schema, model } from 'mongoose';

const publicationSchema = Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxLength: [60, "Title cannot exceed 25 characters"],
    },
    text:{
        type: String,
        required: [true, "Text is required"],
        maxLength: [100, "Text cannot exceed 100 characters"],
    },
    class:{
        type: String,
        required: [true, "Class is required"],
        enum: ["TECNOLOGIA", "TALLER", "PRACTICA_SUPERVISADA"]  
    },

    
    status:{
        type: Boolean,
        default: true
    }
    

},
{
    versionKey: false,
    timeStamps: true
});

export default model("Publication", publicationSchema);