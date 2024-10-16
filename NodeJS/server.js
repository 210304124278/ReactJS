// import modules
// require() func is used to import  modules
const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
// create rest obj
// rest obj used to develop rest api like GET,POST,PUT,DELETE..
const app=express();
// where app is the rest obj

// enable cors policy
app.use(cors());

//set the JSON as MIME type
app.use(express.json());

//create client obj
const ExcelR=new MongoClient("mongodb+srv://admin:admin@excelr.dnfyi0q.mongodb.net/?retryWrites=true&w=majority&appName=ExcelR");
// where ExcelR is the client
//by using ExcelR we can perform db operations

//create POST request
app.post("/login",async (req,res)=>{
    // connect to db
    await ExcelR.connect();

    let obj= await ExcelR.db("employees").collection("login_details").findOne({"user_name":req.body.user_name,
      "password":req.body.password});

    if(obj==undefined || obj==null || obj==""){
        res.json({"login":"fail"});
    }else{
        res.json({"login":"success"});
    }

});
// assign port no.
app.listen(8080,()=>{
    console.log("server listening the port no. 8080");
})