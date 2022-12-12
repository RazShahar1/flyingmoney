const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/FlyingMoney',{useNewUrlParser:true});
const con=mongoose.connection;
con.on('error',console.error.bind(console,'connection error:'));
con.once('open',()=>console.log("connected to db"))

//set expense Schema//
const expenseSchema=mongoose.Schema({
    name:String,
    categore:String,
    amount:Number,
    date:String
})
//set expense collection//
const ExpenseAccount=mongoose.model("ExpenseAccount",expenseSchema);



//set user Schema
const userSchema=mongoose.Schema({
    useremail:String,
    password:String,
})
//set user collection//
const User=mongoose.model("User",userSchema);


module.exports={ExpenseAccount,con ,expenseSchema,User,userSchema }
