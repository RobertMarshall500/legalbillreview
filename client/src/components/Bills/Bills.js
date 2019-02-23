import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Bill = props => (
    <tr>
        <td className={props.bill.paid ? 'completed' : ''}>{props.bill.client}</td>
        <td className={props.bill.paid ? 'completed' : ''}>#{props.bill.invoiceNo}</td>
        <td className={props.bill.paid ? 'completed' : ''}>{props.bill.billingPeriod}</td>
        <td className={props.bill.paid ? 'completed' : ''}>${props.bill.fees}</td>
        <td className={props.bill.paid ? 'completed' : ''}>${props.bill.expenses}</td>
        <td className={props.bill.paid ? 'completed' : ''}>${props.bill.total}</td>

        <td>
            <Link to={"/edit/"+props.bill._id}>Edit</Link>
        </td>
    </tr>
)

export default class Bills extends Component {

    constructor(props) {
        super(props);
        this.state = {bills: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/bills/')
            .then(response => {
                this.setState({ bills: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    listBills() {
        return this.state.bills.map(function(currentBill, i){
            return <Bill bill={currentBill} key={i} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Bills List</h3>
                <table id="myTable" className="table table-striped tablesorter" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Invoice Number</th>
                            <th>Billing Period</th>
                            <th>Fees</th>
                            <th>Expenses</th>
                            <th>Total</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listBills() }
                    </tbody>
                </table>
            </div>
            
        )
    }
}