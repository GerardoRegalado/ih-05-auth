// Importacion
const mongoose = require("mongoose")





// Schema

const userSchema = mongoose.Schema({

    username: {
        type: String,
        trim: true, // para que no acepte espacios en el username
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Por favor utiliza un email válido."]
    },

    password: {
        type: String,
        required: true
    }


}, {timestamps: true }) //timestamps guarda la fecha y hora en la que se creo un documento

//Model

const User = mongoose.model ("User", userSchema)


// Exportacion
module.exports = User
