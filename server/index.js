//server setings//
const fs =require('file-system');
const express=require('express');
const app=express();
const bp = require('body-parser');
const port =4000
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
app.listen(port,()=>console.log(`app listen to port ${port}`));
const dbc =require('../DB');

// //get data
app.post('/first',(req,res)=>{
    dbc.ExpenseAccount.find({},(err,data)=>{
        res.json(data)
    })
})
// //user chack //

app.post('/addtoex',(req,res)=>{
    let data = req.body
    let expense=new dbc.ExpenseAccount({
    name:data.name,
    categore:data.categore,
    amount:data.amount,
    date:data.date
    })
    expense.save()
    res.json("Expase saved")
   
})

app.post("/deleteallexpense", (req,res)=>{
    dbc.ExpenseAccount.deleteMany({},(err)=>{
        res.json('all expense are deleted')
    })
})

app.post('/datefilter',(req,res)=>{
    dbc.ExpenseAccount.find({date:{$gte:req.body.fromdate , $lte:req.body.todate}},(err,date)=>{
        res.json(date)
    }
    )   
})

app.post('/amountfilter',(req,res)=>{
    dbc.ExpenseAccount.find({amount:{$gte:req.body.fromamount , $lte:req.body.toamount}},(err,date)=>{
        res.json(date)
    }
    )   
})

app.post('/deletexpense',(req,res)=>{
    dbc.ExpenseAccount.deleteOne({name:req.body.name ,date: req.body.date,
        amount: req.body.amount,
        category:req.body.categore,},(err)=>{
            if(err)throw err 
            else{
                res.json("Expense is Deleted")
            }
        })      
})

app.post('/login',(req,res)=>{
    console.log(req.body.user);
    dbc.User.findOne({useremail:req.body.user.useremail,password:req.body.user.password},(err,data)=>{
    if (data===null) {
        res.json("ERROR")
    }
    else{
        res.json("Loged in")
    }
    })
})

app.post('/register',(req,res)=>{
    let userdata=req.body
    let user = new dbc.User({
        name:userdata.user.name,
        useremail:req.body.user.useremail,
        password:req.body.user.password
    })
    user.save()
    dbc.User.create({user}
        ,(err)=>{
        if (err){
            throw err
        } else{
            res.json(`Wellcom ${req.body.user.name}`)
        }  
    })
})


   app.post('/getchardata',(req,res)=>{
    console.log("ok");
    dbc.ExpenseAccount.find({},(err,data)=>{
        res.json(data)
    })
})

