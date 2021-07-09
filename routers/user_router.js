let express = require('express');
let path = require('path');
let router = express.Router();
router.use(express.static('./public'));
let master = require('./master.js');
let pikachu = require('./pikachu.js');
let bulbasaur = require('./bulbasaur.js');
let charmander = require('./charmander.js');
router.use('/master',master);
router.use('/pikachu',pikachu);
router.use('/bulbasaur',bulbasaur);
router.use('/charmander',charmander);

//router.use(express.static('./public'));
router.get('/',(req,res)=>{
    let options = {
        root: path.join(__dirname,"../public"),
        dotfiles: 'deny'
    }
    res.sendFile('user1.html',options);
});
module.exports = router;