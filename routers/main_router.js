let express = require('express');
let router = express.Router();
let Pikahcu = require('./Pikachu.js');
let Bulbasaur = require('./Bulbasaur.js');
let Charmander = require('./Charmander.js');
router.get('/',(req,res)=>{
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    res.sendFile('index.html',options);
});
router.use('/Pikachu',Pikachu);
router.use('/Bulbasaur',Bulbasaur);
router.use('/Charmander',Charmander);