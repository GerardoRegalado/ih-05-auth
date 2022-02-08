//controllers

const res = require("express/lib/response")

exports.getHome = (req,res) => {

    res.render("index")
}

exports.getProfile = (req,res) => {
    console.log(req.session)

    const username = req.session.currentUser.username || ""
	const email = req.session.currentUser.email || ""
	const msg = req.session.currentUser.msg || ""             //este es otro tipo de desestructuracion
    
    

    //const { username, email, msg } = req.session.currentUser

    res.render("profile", {
        username,
        email,
        msg
    })
}