// ./index.js

// 1. IMPORTACIONES

const express		= require("express")
const app			= express()

const hbs			= require("hbs")

const connectDB		= require("./config/db")
const sessionManager = require("./config/session")



// 2. MIDDLEWARES
require("dotenv").config()

sessionManager(app)

connectDB()


app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.urlencoded({ extended: true }))




//Layout middlewares

app.use((req,res,next) => {                 //va a servir como una ruta, y le dara acceso a nuestro req.session.currentUser (objeto donde esta guardada la info del usuario)
    //console.log(req.session.currentUser)
    res.locals.currentUser = req.session.currentUser //esta guarda la informacion en una base de datos local para usar la info del usuario en toda la app
    console.log(res.locals)
    next ()                                   //es una invocacion la cual te dice que saltes a la siguiente ruta (casi siempre se usa en middlewares) "no te quedes aqui, avanza a la siguiente parte"
})


// 3. RUTEO
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))