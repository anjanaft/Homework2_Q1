const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    ///res.send("hello welcome");
    res.render('b2');
});
app.get('/home',(req,res)=>{
    ///res.send("hello welcome");
    res.render('homepage');
});
app.get('/home/login',(req,res)=>{
    ////res.send("hello welcome");
    res.render('b1');
});
app.get('/home/register',(req,res)=>{
    ///res.send("hello welcome");
    res.render('b3');
});
app.listen(5000,()=>
{
    console.log("Server running on http://localhost:5000");
});