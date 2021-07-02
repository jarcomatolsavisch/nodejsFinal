let express = require('express');
let router = express.Router();
router.get('/',(req,res)=>{
    res.send("Welcome to Bulbasaur's home");
});
router.get('/about',(req,res)=>{
    res.send("Bulba!");
});