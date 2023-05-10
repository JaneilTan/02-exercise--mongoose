const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventorySchema = new Schema({
    item: {type: String, required: true},
    qty: {type: Number, required: true},
    size: {
        h: Number,
        w: Number,
        uom: String,
    },
    status: {type: String, required: true},
});

module.exports = mongoose.model("Inventory", inventorySchema);

