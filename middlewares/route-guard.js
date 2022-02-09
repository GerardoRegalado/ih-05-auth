//CUANDO EL USUARIO NO TIENE UNA SESION ACTIVA:

exports.authAreas =  (req,res,next) => {      //esta madre se va anclar a las rutas 

    if(req.session.currentUser){

        return res.redirect("/")
    }

    next()


}

//AREAS PRIVADAS, EL USUARIO DEBE ESTAR LOGGEADO PARA ACCEDER

exports.privateAreas= (req,res,next) => {

    if(!req.session.currentUser){

        res.redirect("/auth/login")
        return
    }   

    next()

}

