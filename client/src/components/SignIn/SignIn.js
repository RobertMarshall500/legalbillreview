import React, { Component } from 'react';




export default class SignIn extends Component {


    render() {
        return (
            <div className="container">
            <div id="login_dv" class="maindiv">
            <input type="email" placeholder="Email" id="emil_field" />
            <input type="password" placeholder="Password" id="passwod_field" />
            <a class="waves-effect waves-light btn">Sign In</a>
        </div>
        <div id="user_d=iv" class="loggedin-div">
            <p id="use_para">You're currently logged in</p>
            <button onclick="logOut()">Logout</button>
        </div>
</div>

        )
    }
}

