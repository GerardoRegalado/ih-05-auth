//importaciones

const express = require("express")
const router = express.Router()


const authController = require("../controllers/authController.js")

//ruteo

//A .sign up
router.get("/register", authController.register)

//A2 enviar formulario
router.post("/register", authController.registerForm)

//login
router.get("/login", authController.login)


//exportacion

module.exports = router