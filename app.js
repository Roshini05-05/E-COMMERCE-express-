const express=require('express');
const app=express();
const path=require('path');
const products=require('./data/products.json');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index',{products});
});

app.listen(3000,()=>console.log("http://localhost:3000"));