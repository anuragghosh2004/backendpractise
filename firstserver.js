require("dotenv").config();
let express =require("express");
let app =express();
let port =3000;
app.get('/',(req,res)=>{
res.send("hellow world");

});
app.get('/twitter',(req,res)=>{
    res.send("ami champion");

});
app.get('/login',(req,res)=>{
res.send("ami khub bhalo");//eikhane amra html code o send korte pari
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening to port ${port} `);
});