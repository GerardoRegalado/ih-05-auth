// ./controllers/indexController.js

// 1. CONTROLLERS

exports.getHome = (req, res) => {
    res.render("index");
  };
  
  exports.getProfile = (req, res) => {
    // console.log("session:" , req.session);       esto ya no se necesita por que hicimos el guardado en el local (index vertebral)
    // const {currentUser} = req.session
  
    // // SOLUCIÓN 1
    // const username = currentUser ? currentUser.username : ""
    // const email = currentUser ? currentUser.email : ""
    // const msg = currentUser ? currentUser.msg : ""
  
    res.render("profile")
  }