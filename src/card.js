import React from 'react'
import './card.css'; 



class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            placeholdertext:'', 
            cardnum:['•','•','•','•','•','•','•','•','•','•','•','•','•','•','•','•'], 
            valid:['•','•','/','•','•'],
        } 
        //  usernametext = /^(w{1,20})$/; 
        //  month = /^([1-9]{1,2})$/; 
        //  year = /^([1-9]{1,2})$/;
        //  slash=/^[^\/]$/; 
        //  num =/^([1-9]{1}$/);
    }
    placeHolder=(event)=>{
        // var numberofwhitespace = (event.target.value.split(" ").length - 1); 
        // var lengthplaceholder = 20+numberofwhitespace; 
        if (/^([a-zA-z\s]{0,20})$/.test(event.target.value)===false)
            { event.target.value=event.target.value.slice(0, event.target.value.length-1)}
        this.setState({placeholdertext:event.target.value.toUpperCase()})
        
       
    }
    
    cardN=(event)=>{
        if (/^([1-9]{0,16})$/.test(event.target.value)===false)
            {
                 event.target.value=event.target.value.slice(0, event.target.value.length-1)
            }
        this.setState({cardnum:event.target.value})
        
    } 

    expirationD=(event)=>{
        
        if (/^(1)$/.test(event.target.value[0])===true)
        {   
            if (/^[0-2]$/.test(event.target.value[1])===false)
            {
                 event.target.value=event.target.value.slice(0, 1)
            } 
        }
        if (/^(0)$/.test(event.target.value[0])===true)
        {   
            if (/^[1-9]$/.test(event.target.value[1])===false)
            {
                 event.target.value=event.target.value.slice(0, 1)
            } 
        } 
        if (/^(0|1)$/.test(event.target.value[0])===false)
        {
            event.target.value=event.target.value.slice(0, 0)
        }
        if (/^(\/)$/.test(event.target.value[2])===false)
        {
            event.target.value=event.target.value.slice(0, 2)
        }
        if (/^([0-9])$/.test(event.target.value[3])===false)
        {
            event.target.value=event.target.value.slice(0, 3)
        }
        if (/^([0-9])$/.test(event.target.value[4])===false)
        {
            event.target.value=event.target.value.slice(0, 4)
        }
        this.setState({valid:event.target.value})
        
            
       
        
        
    }


    render() {
        
        return (<div>
            <input  type="text"  onChange={this.placeHolder} className='holderInput' placeholder="user name" maxLength="20"/>
            <input type='text' onChange={this.cardN} className='cardNumber' placeholder="card number" maxLength="16"/>
            <input type='text' onChange={this.expirationD} className='expirationDate' placeholder="experation date" maxLength='5'/>
            
            
            <div className="maincardcontainer">  
                <h1 className="mainTitle"> <strong >CREDIT CARD</strong></h1>
                <img className="emvShipCard" src="https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-9-230x200.png" alt="puce"></img>
                <div className="cardCode">
                    <p className="goldCorlor ">{this.state.cardnum[0] ? this.state.cardnum[0] : '•' }{this.state.cardnum[1] ?this.state.cardnum[1] : '•' }{this.state.cardnum[2] ?this.state.cardnum[2] : '•' }{this.state.cardnum[3] ?this.state.cardnum[3] : '•' }</p>
                    <p className="goldCorlor ">{this.state.cardnum[4] ?this.state.cardnum[4] : '•' }{this.state.cardnum[5] ?this.state.cardnum[5] : '•' }{this.state.cardnum[6] ?this.state.cardnum[6] : '•' }{this.state.cardnum[7] ?this.state.cardnum[7] : '•' }</p>
                    <p className="goldCorlor ">{this.state.cardnum[8] ?this.state.cardnum[8] : '•' }{this.state.cardnum[9] ?this.state.cardnum[9] : '•' }{this.state.cardnum[10] ?this.state.cardnum[10] : '•' }{this.state.cardnum[11] ?this.state.cardnum[11] : '•' }</p>
                    <p className="goldCorlor ">{this.state.cardnum[12] ?this.state.cardnum[12] : '•' }{this.state.cardnum[13] ?this.state.cardnum[13] : '•' }{this.state.cardnum[14] ?this.state.cardnum[14] : '•' }{this.state.cardnum[15] ?this.state.cardnum[15] : '•' }</p>
                </div>
                <div className="cardSecurityAndExperationDate">
                    <span className="securityCode">5422</span>
                    <div className="experationDate">
                        <div className="firstContainer">    
                            <span className="validThru">VALID <br/> THRU</span>
                            <i className="fa fa-caret-right icon1"></i>
                        </div>
                        <div className="secondContainer">
                            <span className="monthandyear">MONTH/YEAR</span>
                            <span>{this.state.valid[0] ? this.state.valid[0] : '•' }{this.state.valid[1] ? this.state.valid[1] : '•' }{this.state.valid[2] ? this.state.valid[2] : '/' }{this.state.valid[3] ? this.state.valid[3] : '•' }{this.state.valid[4] ? this.state.valid[4] : '•' }</span>
                        </div>
                    </div>
                </div>
                <p className="moreeditting">{this.state.placeholdertext ? this.state.placeholdertext :'placeholder' }</p>
                <div className="visaandmasterCard">
                    <img className="brandicon" src="https://boutique.letemps.ch/moxiemanager/data/products/paymenticons/mastercard_payment.png.pagespeed.ce.Ky4aKPTuWO.png"  alt="mastervisaicon"></img>
                    <img className="brandicon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1280px-Visa.svg.png" alt="visaicon"></img>
                </div>
            </div>
            </div>

        )
    }

}




export default Card; 