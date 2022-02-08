//Gestion de sesion

//CONFIGURACION Y EL TIEPO DE EXPIRACION DE LA SESION

//IMPORTACIONES

const session = require("express-session")
const mongoStore = require ("connect-mongo")
const MongoStore = require("connect-mongo")



//Gestion

const sessionManager = (application) => {

    application.set("trust proxy", 1) //patron de diseno llamado proxy. puede matar la sesion o puede avanzarla, verifica que si la sesion es 'extrana' o 'pirateada' evita el ruteo, es seguridad

    application.use(session({  //la sesion se genera con una palabra secreta o ticket o cookie junto con su expiracion, cuanto tiempo te durara la cookie o el ticket para estar logueado
        secret: "process.env.SECRET", //una palabra secreta que te da el cliente y el servidor la verifica cuando haces la solicitud, es pues como un tipo contrasena de que si eres tu
        resave: true,    //cada que hace un login se guarda la informacion en la base de datos, es como un updating
        cookie: {
            maxAge: 8640000,  //tiempo de expiracion del cookie
            httpOnly: true 
        },
        saveUninitialized: false,
        store: MongoStore.create({

            mongoUrl: process.env.MONGODB_URI
        }) 
        }

    
    ))



    //console.log("estoy en el session manager")


}





//exportacion
module.exports = sessionManager