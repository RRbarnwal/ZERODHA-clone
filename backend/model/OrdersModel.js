const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchems");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };