let express = require('express');
let router = express.Router();
router.get('/',(req,res)=>{
    res.send("Welcome to Charmander's home");
});
router.get('/about',(req,res)=>{
    res.send("Char char!");
});