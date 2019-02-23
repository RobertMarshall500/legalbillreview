const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bill = new Schema({
    client: {
        type: String
    },
    invoiceNo: {
        type: String
    },
    billingPeriod: {
        type: String
    },
    fees: {
        type: String
    },
    expenses: {
        type: String
    },
    total: {
        type: String
    },
    paid: {
        type: Boolean
    }
});

module.exports = mongoose.model('Bill', Bill);