let express = require("express");
let app = express();
let port = process.env.PORT || 8888;
let user_router = require('./routers/main_router.js');
app.get('/',(req,res)=>{
    res.end("Welcome to my pokemon's world~");
});
app.use('/user', user_router);
app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
});