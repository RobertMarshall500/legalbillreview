import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBills extends Component {

    constructor(props) {
        super(props);

        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeInvoiceNo = this.onChangeInvoiceNo.bind(this);
        this.onChangeBillPeriod = this.onChangeBillPeriod.bind(this);
        this.onChangeFees = this.onChangeFees.bind(this);
        this.onChangeExpenses = this.onChangeExpenses.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            client: '',
            invoiceNo: '',
            billingPeriod: '',
            fees: '',
            expenses: '',
            total: '',
            paid: false
        }
    }

    onChangeClient(e) {
        this.setState({
            client: e.target.value
        });
    }

    onChangeBillPeriod(e) {
        this.setState({
            billingPeriod: e.target.value
        });
    }

    onChangeInvoiceNo(e) {
        this.setState({
            invoiceNo: e.target.value
        });
    }

    onChangeFees(e) {
        this.setState({
           fees: e.target.value
        });
    }

    onChangeExpenses(e) {
        this.setState({
            expenses: e.target.value
        });
    }

    onChangeTotal(e) {
        var y = parseInt(document.getElementById("expenses").value);
        var z = parseInt(document.getElementById("fees").value);
        var x = y + z;
        this.setState({
            total: x
        });
    }
    // onChangeTotal =(e)=> {
    //     // let x = this.state.fees + this.state.expenses
    //     // this.setState({result: x });
    //     // console.log(this.state);
    //     this.setState({
    //         expenses: e.target.value
    //     });
    //   }



    onSubmit(e) {
        e.preventDefault();
        var a = document.getElementById("fees").value;
        var b = document.getElementById("expenses").value;

        const newBill = {
            client: this.state.client,
            invoiceNo: this.state.invoiceNo,
            billingPeriod: this.state.billingPeriod,
            fees: this.state.fees,
            expenses: this.state.expenses,
            total: parseInt(a) + parseInt(b),
            paid: this.state.paid
        };

        axios.post('http://localhost:4000/bills/add', newBill)
            .then(res => console.log(res.data));
        
        this.setState({
            client: '',
            invoiceNo: '',
            billingPeriod: '',
            fees: '',
            expenses: '',
            total: '',
            paid: false
        })
    }

    render() {
        return (
        <div className="container">
            <div style={{marginTop: 10}}>
                <h3>Add New Bill</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Client: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.client}
                                onChange={this.onChangeClient}
                                />
                    </div>
                    <div className="form-group">
                        <label>Invoice Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.invoiceNo}
                                onChange={this.onChangeInvoiceNo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Billing Period: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.billingPeriod}
                                onChange={this.onChangeBillPeriod}
                                />
                    </div>
                    <div className="form-group">
                        <label>Fees: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                id="fees"
                                value={this.state.fees}
                                onChange={this.onChangeFees}
                                />
                    </div>
                    <div className="form-group">
                        <label>Expenses: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                id="expenses"
                                value={this.state.expenses}
                                onChange={this.onChangeExpenses}
                                />
                    </div>
                    {/* <div className="form-group">
                        <label>Total: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.total}
                                onChange={this.onChangeTotal}
                                />
                    </div> */}
                    
                    

                    <div className="form-group">
                        <input type="submit" value="Add Bill" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
        )
    }
}