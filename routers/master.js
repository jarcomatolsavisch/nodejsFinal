let express = require('express');
let router = express.Router();
//將public的檔案全部丟上來
router.use(express.static('./public'));
router.use(function timelog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});
router.get('/', (req,res)=>{
    res.send(
        '我的神奇寶貝球<br>'+
        '<a href="/user/master/about">訓練師資料</a><br>'+
        '<a href="/user/master/collection.html">寶可夢列表</a><br>'
    );
});
router.get('/about',(req,res)=>{
    res.send('greeting');
});
module.exports = router;