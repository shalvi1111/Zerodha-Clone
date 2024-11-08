const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    name:String,
      qty: Number,
      // price: mongoose.Types.Decimal128,
      price : Number,
      mode: String,
});

module.exports = OrdersSchema;