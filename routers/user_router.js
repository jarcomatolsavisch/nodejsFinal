let express = require('express');
let router = express.Router();
let pikachu = require('./pikachu.js');
let bulbasaur = require('./bulbasaur.js');
let charmander = require('./charmander.js');
router.get('/',(req,res)=>{
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile('index.html',options);
});
router.use('/pikachu',pikachu);
router.use('/bulbasaur',bulbasaur);
router.use('/charmander',charmander);
module.exports = router;