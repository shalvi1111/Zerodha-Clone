require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const  HoldingsModel  = require("./models/HoldingsModel.jsx");
const  PositonsModel  = require("./models/PositionsModel.jsx");
// const {HoldingsModel} = require("./models/HoldingsModel.jsx") ;
// const {PositonsModel} = require("./models/PositionsModel.jsx");
// const { OrdersModel } = require("./models/OrdersModel.jsx");
const cors =  require("cors");
const bodyParser = require("body-parser");
const  OrdersModel  = require("./models/OrdersModel.jsx");
const UserModel = require("./models/UserModels.jsx");
 const {createSecretToken} = require("./util/SecretToken.js");
 const jwt = require("jsonwebtoken");
 const cookeieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000 ;
 
 const url = process.env.MONGO_URL;

const app = express();
app.use(cors(
  {
    origin: ["http://localhost:8000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookeieParser());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url )
  .then( ()=>{
    console.log("Db connected");
  })
 .catch ( (err)=>{
    console.log(err);
 })
}



// app.get("/addHoldings" , async(req,res)=>{
//   const tempHolding =  [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//     tempHolding.forEach( (item)=>{
//       let newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net:   item.net,
//         day:  item.day,
//       }) ;
//        newHolding.save();
//     });

//     res.send("New holding is saved");
// })

// app.get("/addPositons" , async(req,res)=>{
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//     tempPositions.forEach( (item)=>{
//       let newPositions = new PositonsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,   
//       });

//       newPositions.save();
//     })
//     res.send("Positons was saved");
// })

// app.get("/addOrders" , async(req,res)=>{
//   let tempOrders = [
//     {
//       name: "INFY",
//       price: 1555.45,
//       percent: "-1.60%",
//       isDown: true,
//     },
//     {
//       name: "ONGC",
//       price: 116.8,
//       percent: "-0.09%",
//       isDown: true,
//     },
//     {
//       name: "TCS",
//       price: 3194.8,
//       percent: "-0.25%",
//       isDown: true,
//     },
//     {
//       name: "KPITTECH",
//       price: 266.45,
//       percent: "3.54%",
//       isDown: false,
//     },
//     {
//       name: "QUICKHEAL",
//       price: 308.55,
//       percent: "-0.15%",
//       isDown: true,
//     },
//     {
//       name: "WIPRO",
//       price: 577.75,
//       percent: "0.32%",
//       isDown: false,
//     },
//     {
//       name: "M&M",
//       price: 779.8,
//       percent: "-0.01%",
//       isDown: true,
//     },
//     {
//       name: "RELIANCE",
//       price: 2112.4,
//       percent: "1.44%",
//       isDown: false,
//     },
//     {
//       name: "HUL",
//       price: 512.4,
//       percent: "1.04%",
//       isDown: false,
//     },
//   ];

//   tempOrders.forEach( (item)=>{
//     let newOrders = new OrdersModel({
//       name:item.name,
//       price: item.price,
//       percent: item.percent,
//       mode: item.mode,
//     }) ;
//     newOrders.save();
//   });
//     res.send("Orders was saved");
// })

app.get("/allHoldings" , async(req,res)=>{
  let holdingsData = await HoldingsModel.find({});
  res.json(holdingsData);
}) ;

app.post("/newOrder" , async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    // name : r,
    qty: req.body.qty,
    // price: mongoose.Types.Decimal128.fromString(req.body.price.toString()),
    price : req.body.price,
    mode: req.body.mode,
  }) ;
  console.log(req.body);
         await newOrder.save();
       
  //  res.send("order saved");
  //  console.log(req.body.name);
});

  app.get("/allOrders" , async(req,res)=>{
    let OrdersData = await OrdersModel.find({});
    res.json(OrdersData);
  })

app.get("/allPositions" , async(req,res)=>{
  let PositionsData = await PositonsModel.find({});
  res.json(PositionsData);
});

  app.post("/login" , async(req,res,next)=>{
    try{
       const {email , password } = req.body ; 
    if(!email || !password ){
      return res.json( {message : "All fields are required1"});
    }

    const user = await UserModel.findOne({email});

    if(user){
      return res.json( {message : "Incorrect password and email"});
    }

    const auth = await bcypt.compare(password , user.password);

    if(!auth){
      return res.json({ message : "Incorrect email or password"});
    }

    const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next();
     }
     catch(err){
      console.log(err);
     }

  }) ;


  app.post("/signup" , async(req,res,next)=>{
    try{
    const {email , username , password , createdAt} = req.body;
    const existingUser = await UserModel.findOne( {email});
    if(existingUser){
      return res.json( {message : "User already exists"});
    }

    const user = await UserModel.create( {email , username , password , createdAt});
    const token = createSecretToken(user._id);
    res.cookie( "token" , token ,
       {
      withCredentials : true ,
      httpOnly: false
      }
    )

    res.status( 201).json({message : "User signed successfully" , success : true , user}) ;
    next();
  }
    catch(err){
      console.log(err);
    }
  });


    app.post("/userVerfication" , async(req,res)=>{
      const token = req.cookies.token ;
      if(token){
        return res.json({status : false})
      }

      jwt.verify( token , process.env.TOKEN_KEY , async( err, data) =>{
        console.log(token);
        if(err){
          return res.json( {status : false});
        }
        else{
          const user = await UserModel.findById(data.id);
          if(user){
            return res.json( {status : true , user : user.username});
          }
          else{
            return res.json( {status : false});
          }
        }
      })
    })

app.listen( PORT ,()=>{
    console.log(`Server is working  ${PORT}`);
    // mongoose.connect(url );
})