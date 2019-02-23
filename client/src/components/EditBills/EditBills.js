import React, { Component } from 'react';
import axios from 'axios';
import 'react-materialize';


export default class EditBills extends Component {

    constructor(props) {
        super(props);

        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeInvoiceNo = this.onChangeInvoiceNo.bind(this);
        this.onChangeBillPeriod = this.onChangeBillPeriod.bind(this);
        this.onChangeFees = this.onChangeFees.bind(this);
        this.onChangeExpenses = this.onChangeExpenses.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangePaid = this.onChangePaid.bind(this);

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

    componentDidMount() {
        axios.get('http://localhost:4000/bills/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    client: response.data.client,
                    invoiceNo: response.data.invoiceNo,
                    billingPeriod: response.data.billingPeriod,
                    fees: response.data.fees,
                    expenses: response.data.expenses,
                    total: response.data.total,
                    paid: response.data.paid
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        this.setState({
            total: e.target.value
        });
    }

    onChangePaid(e) {
        this.setState({
            paid: !this.state.paid
        });
    }

    onSubmit(e) {
        // e.preventDefault();
        

        var a = document.getElementById("fees").value;
        var b = document.getElementById("expenses").value;

        const obj = {
            client: this.state.client,
            invoiceNo: this.state.invoiceNo,
            billingPeriod: this.state.billingPeriod,
            fees: this.state.fees,
            expenses: this.state.expenses,
            total: parseInt(a) + parseInt(b),
            paid: this.state.paid
        };
        console.log(obj);
        axios.post('http://localhost:4000/bills/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        // this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h3 align="center">Update Bill</h3>
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
                                className="form-control" id="fees"
                                value={this.state.fees}
                                onChange={this.onChangeFees}
                                />
                    </div>
                    <div className="form-group">
                        <label>Expenses: </label>
                        <input 
                                type="text" 
                                className="form-control" id="expenses"
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
                    </div>
                     */}
                    
                    

                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangePaid}
                                checked={this.state.paid}
                                value={this.state.paid}
                                />

 
                        <label className="form-check-label" htmlFor="completedCheckbox">
                        <input type="checkbox" />

                          <span>Paid</span>
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}