import React, { Component } from 'react';
import BankNotes from "./img/banknotes.jpg";
import Coins from "./img/coins.jpg";
import Benji from "./img/Benji eye.jpg";
import {Parallax} from 'react-materialize';
import {Modal} from 'react-materialize';
import {Button} from 'react-materialize';



export default class Main extends Component {

    render() {
        return(
<div>
<div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
  <div className="container">
    <br /><br />
    <h1 className="header center Black-text text-lighten-2" id="parallax-bold"><strong>Legal Bill Review</strong></h1>
    <div className="row center">
       <h5 className="bold" className="header col s12 light">Matter Management Platform for Legal Professionals</h5>
    </div>

    <br /><br />

  </div>
</div>
<div className="parallax">
  <Parallax imageSrc={BankNotes} alt="bank notes"/>
</div>
</div>
  <div className="container">
  <div className="section">

    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
          <h5 className="center">Guideline Enforcement</h5>

            <p className="center" className="light">Automatic or manual enforcement of timekeeper rates, expense compliance,  and other billing guidelines</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">group</i></h2>
          <h5 className="center">User Experience Focused</h5>

          <p className="light">Simplifies the e-billing process by pre-screening the invoices against the clients guidelines</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
          <h5 className="center">Easy to work with</h5>

          <p className="light">Searchable, reportable, and up-to-date repository of client matter</p>
        </div>
      </div>
    </div>

  </div>
</div>


  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light bold">LBR: transforming the legal landscape in litigation management through the review and analysis of law firm invoices against service level agreements</h5>
           <div className="row center">

            
            </div>
               <div id="modal1" className="modal">
                <div className="modal-content">
                 <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                 <a href="modal" className="modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={Coins} alt="Unsplashed background img 2" /></div>
  </div>


      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <Modal
  header='Contact Information'
  trigger={<Button className="btn modal-trigger" waves='light'>Sales and Support</Button>}>
              <p>Telephone No.: 305-123-4567</p>
              <p>Email: LBR@LBR.COM</p>
              <p>Address: PO Box 123 Spaghetti Way</p>
          </Modal>
            
            
              <p></p>
          <p class="left-align light"></p>
        </div>
      </div>

  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot"><param name="" value="" />
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">Simplifying and Streamlining: Review, spend, budget and deductible</h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={Benji} alt="Unsplashed background img 3" /></div>
  </div>
  <footer className="page-footer white">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text"></h5>
          <p className="grey-text text-lighten-4"></p>   
        </div>

        
        <div className="col s3 offset-s11">
          <ul>
            <li><a className="grey-text" href="#!">About us</a></li>
            <li><a className="grey-text" href="#!">Features and benefits</a></li>
            <li><a className="grey-text" href="#!">Services</a></li>
            <li><a className="grey-text" href="#!">Success Stories</a></li>
          </ul>
        </div>

      </div>
    </div>

  <footer> 
    <div className="footer-copyright">
      <div className="container" >
        <ul>
          <li><a className="grey-text">Privacy Statement</a></li>
          <li><a className="grey-text">Terms of Use</a></li>
        </ul>  
       </div>
    </div>
  </footer>
</footer>
</div>




        )
    }
}

