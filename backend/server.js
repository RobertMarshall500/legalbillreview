const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const billRoutes = express.Router();

let Bill = require('./billschema');

app.use(cors());
app.use(bodyParser.json());

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/legalbills", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

billRoutes.route('/').get(function(req, res) {
    Bill.find(function(err, bills) {
        if (err) {
            console.log(err);
        } else {
            res.json(bills);
        }
    });
});

billRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Bill.findById(id, function(err, bill) {
        res.json(bill);
    });
});

billRoutes.route('/update/:id').post(function(req, res) {
    Bill.findById(req.params.id, function(err, bill) {
        if (!bill)
            res.status(404).send("data is not found");
        else
            bill.client = req.body.client;
            bill.invoiceNo = req.body.invoiceNo;
            bill.billingPeriod = req.body.billingPeriod;
            bill.fees = req.body.fees;
            bill.expenses = req.body.expenses;
            bill.total = req.body.total;
            bill.fees = req.body.fees;
            bill.paid = req.body.paid;


            bill.save().then(bill => {
                res.json('Bill updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

billRoutes.route('/add').post(function(req, res) {
    let bill = new Bill(req.body);
    bill.save()
        .then(bill => {
            res.status(200).json({'bill': 'bill added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new bill failed');
        });
});

app.use('/bills', billRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});