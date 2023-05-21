const express=require('express');
require('./db/config');
require('dotenv').config();
const cors=require('cors');
const Product=require('./db/Schema');
const Product2=require('./db/Schema2');
const app=express();


app.use(express.json());
app.use(cors());

app.post("/add-product",async(req,resp)=>{
    let product=new Product2(req.body);
    let result=await product.save();
    resp.send(result);
    // console.log(result);
})
app.get('/products',async(req,resp)=>{
    let product=await Product2.find();
    if(product.length>0){
        resp.send(product);
    }else{
        resp.send({result:"No products found"});
    }
})

app.delete('/product/:id',async(req,resp)=>{
       const clone=await Product2.deleteOne({_id:req.params.id});
    //    console.log(clone);
       resp.send(clone);
})

app.put("/product/:id",async(req,resp)=>{
    let answer=await Product2.updateOne({_id:req.params.id},{$set:req.body})
    resp.send(answer);
})
app.get("/find/:id",async(req,resp)=>{
   let ans=await Product2.find({_id:req.params.id});
   resp.send(ans);
})
app.get("/search/:key",async(req,resp)=>{
    let answer=await Product2.find({
        "$or":[
            {"name":{$regex:req.params.key}},
                {"price":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}},
                {"company":{$regex:req.params.key}}
        ]
    });
    resp.send(answer);
    console.log(answer);
})
const port=process.env.PORT || 5000;

app.listen(port);