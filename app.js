const express= require("express");
const bodyParser =require("body-parser");
const app=express();
var items= ["Buy Food","Cook Food","Eat Food"];
let worksItems=[];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    var today = new Date();
    var options ={
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var day=today.toLocaleDateString("en-US", options);
    


    res.render("list", {listTitle: day, Items: items});

});
app.post("/",function(req,res){
    item=req.body.newItem;
    console.log(req.body.list);
    if(req.body.list=== "Work"){
        worksItems.push(item);  
        res.redirect("/work");
    } else{
    item=req.body.newItem;
    items.push(item);
    res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",Items: worksItems});
});
app.get("/about",function(req,res){
    res.render("about");
})
app.post("/work",function(req,res){
    let item = req.body.newItem;
    worksItems.push(items);
    res.redirect("/work");
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
})