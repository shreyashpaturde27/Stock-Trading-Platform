const { model } = require("mongoose");

const { HoldingSchema } = require('../schema/HoldingSchema');
const HoldingModel =  model("holding", HoldingSchema);

module.exports = { HoldingModel };