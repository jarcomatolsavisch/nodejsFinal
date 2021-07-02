let express = require('express');
let app = express();
let port = process.env.PORT || 8888;
let user_router = require('./routers/user_router.js');
app.get('/',(req,res)=>{
    res.send("Welcome to my pokemon world");
});
app.use('/user',user_router);
app.listen(port, ()=>{
    console.log(`server listening at port ${port}`);
});