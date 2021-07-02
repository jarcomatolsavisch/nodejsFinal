let express = require('express');
let router = express.Router();
let name = "Pikachu";
let greeting = "pika! pika";
router.use(function timelog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});
router.get('/',(req,res)=>{
    res.send(`${name}'s Home`);
});
router.get('/about',(req,res)=>{
    res.send(greeting);
});
module.exports = router;