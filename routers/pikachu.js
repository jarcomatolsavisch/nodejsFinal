let express = require('express');
let router = express.Router();
const path = require("path");
router.use(express.static('./public'));
let name = "Pikachu";
let greeting = "pika! pika";
router.use(function timelog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});
router.get('/',(req,res)=>{
    res.send(`${name}'s Home`);
});
//當訪問到/about這個router，回傳public底下的pikachu.html頁面
//由於pikachu.html裡面需要用到一些同樣放在public的圖片
//所以我在最開始的時候將public資料夾設為static
//讓瀏覽器拿到pikachu.html之後可以去public獲取圖片
router.get('/about',(req,res)=>{
    let options = {
        //__dirname存的是目前pikachu.js所存在的檔案夾
        root: path.join(__dirname, "../public"),
        dotfiles: 'deny'
    };
    res.sendFile("pikachu.html",options);
});
module.exports = router;