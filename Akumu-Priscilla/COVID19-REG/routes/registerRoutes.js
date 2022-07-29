const express = require("express");
const router = express.Router();
const Register = require("../models/Register");


//POST request to /register
router.get('/register',(req,res)=>{
    res.render('register')
});

router.post('/register',async(req,res)=>{
try {
    const newRegister = new Register(req.body)
    await newRegister.save()
    console.log(newRegister)

    res.status(200).render('register',{message:'Registration was successful!'})
} catch (error) {
    console.log(error);
    res.render('register')
}

});

module.exports = router;                                                                                                                         