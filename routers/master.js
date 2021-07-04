let express = require('express');
const path = require("path");
let router = express.Router();
router.use(function timelog(req,res,next){
    console.log('In master.js');
    console.log('Time: ', Date.now());
    next();
});
router.get('/', (req,res)=>{
    res.send(
        '我的神奇寶貝球<br>'+
        '<a href="/user/master/about">訓練師資料</a><br>'+
        '<a href="/user/master/collection">寶可夢列表</a><br>'
    );
});
//將public的檔案全部丟上來
router.use(express.static('./public'));
router.get('/about',(req,res)=>{
    let options = {
        root: path.join(__dirname,"../public"),
        dotfiles: 'deny'
    };
    res.sendFile('trainer.html',options);
});
router.get('/collection',(req,res)=>{
    let options = {
        root: path.join(__dirname,"../public"),
        dotfiles: 'deny'
    };
    res.sendFile('collection.html',options);
})
module.exports = router;