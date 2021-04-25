import React, {Component} from 'react'
import '../styles/Store.scss'
import InfoBar from './infobar';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';

//non gray components
import {ReactComponent as RocketShip} from '../styles/graphics/Rocket-Ship-Item.svg';
import {ReactComponent as LeftThruster} from '../styles/graphics/Left-Thruster-Item.svg';
import {ReactComponent as LeftStructure} from '../styles/graphics/Left-Structure.svg';
import {ReactComponent as RightStructure} from '../styles/graphics/Right-Structure.svg';
import {ReactComponent as RightThruster} from '../styles/graphics/Right-Booster.svg';
import {ReactComponent as FuelTank} from '../styles/graphics/Fuel-Tank.svg';

//gray out components
import {ReactComponent as GrayRocketShip} from '../styles/graphics/Gray-Rocket-Ship-Item.svg';
import {ReactComponent as GrayLeftThruster} from '../styles/graphics/Gray-Left-Booster.svg';
import {ReactComponent as GrayLeftStructure} from '../styles/graphics/Gray-Left-Structure.svg';
import {ReactComponent as GrayRightStructure} from '../styles/graphics/Gray-Right-Structure.svg';
import {ReactComponent as GrayRightThruster} from '../styles/graphics/Gray-Right-Booster.svg';
import {ReactComponent as GrayFuelTank} from '../styles/graphics/Gray-Fuel-Tank.svg';

import db from '../firebase'
import firebase from 'firebase'
import NavBar from './navbar';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

class Store extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBoughtRocket: false,
            isBoughtLeftThruster: false,
            isBoughtRightThruster: false,
            isBoughtRightStructure: false,
            isBoughtLeftStructure: false,
            isBoughtFuelTank: false,
            balance : 3700
        }

        //this binding is needed to make the this work in the callback
        this.handleClickRocket = this.handleClickRocket.bind(this);
        this.handleClickLeftStructure = this.handleClickLeftStructure.bind(this);
        this.handleClickRightStructure = this.handleClickRightStructure.bind(this);
        this.handleClickLeftThruster = this.handleClickLeftThruster.bind(this);
        this.handleClickRightThruster = this.handleClickRightThruster.bind(this);
        this.handleClickFuelTank = this.handleClickFuelTank.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    findNum=(num, price, item)=>{
        if (this.props.userId != 0){
            var rocketRef = db.collection("users").doc(this.props.userId);
            rocketRef.get().then((doc) => {
                if (doc.exists) {
                    for(var i = 0; i < doc.data().notPurchased.length; i++){
                        if (num == doc.data().notPurchased[i] && doc.data().money >= price){
                            rocketRef.update({
                                notPurchased: firebase.firestore.FieldValue.arrayRemove(num),
                                money: firebase.firestore.FieldValue.increment(-1 * price)
                            });
                            if (item == "rocket"){
                                this.setState(state => ({
                                    isBoughtRocket: true
                                }));
                            }else if(item == "left thruster"){
                                this.setState(state => ({
                                    isBoughtLeftThruster: true
                                }));
                            }else if(item == "left structure"){
                                this.setState(state => ({
                                    isBoughtLeftStructure: true
                                }));
                            }else if(item == "right structure"){
                                this.setState(state => ({
                                    isBoughtRightStructure: true
                                }));
                            }else if(item == "right thruster"){
                                this.setState(state => ({
                                    isBoughtRightThruster: true
                                }));
                            }else if(item == "fuel tank"){
                                this.setState(state => ({
                                    isBoughtFuelTank: true
                                }));
                            }
                            return true;
                        }
                    }
                    return false;
                } 
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    }
    handleClickRocket() {
        this.setState(state => ({
            isBoughtRocket: true, balance: this.state.balance - 1000
        }));
    }

    handleClickLeftThruster() {
        this.setState(state => ({
            isBoughtLeftThruster: true, balance: this.state.balance - 500
        }));
    }

    handleClickRightThruster() {
        this.setState(state => ({
            isBoughtRightThruster: true, balance: this.state.balance - 500
        }));
    }

    handleClickLeftStructure() {
        this.setState(state => ({
            isBoughtLeftStructure: true, balance: this.state.balance - 500
        }));
    }

    handleClickRightStructure() {
        this.setState(state => ({
            isBoughtRightStructure: true, balance: this.state.balance - 500
        }));
    }

    handleClickFuelTank() {

        if (this.props.userId != 0){
            var fuelTankRef = db.collection("users").doc(this.props.userId);
            fuelTankRef.get().then((doc) => {
                if (doc.exists) {
                    this.findNum(6,100, "fuel tank");
                } 
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    }

    handleText=e=>{
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit=e=>{ 
        var id = db.collection("users").add({
            username: this.state.name,
            money: 100,
            notPurchased: [1,2,3,4,5,6]
        }).then((docRef) => {
            // this.setState({
            //     docId: docRef.id
            // })
            this.props.setUserId(docRef.id);
        })
    }

    render() {
        return(
            <div className="background">
                <div id="info-bar">
                    <DogeCoin id="doge-logo"></DogeCoin>
                    <div id="goal-text">GET ELON TO THE MOON</div>
                    <div id="cash-balance">$ {this.state.balance}</div>
                </div>
                <NavBar></NavBar>
                <div id="parts-container">  
                    <a onClick={this.handleClickRocket} id="atag">
                        {this.state.isBoughtRocket ? <GrayRocketShip className="itemBox"/> : <RocketShip className="itemBox"/>}
                    </a>
                    <a onClick={this.handleClickLeftThruster} id="atag">
                        {this.state.isBoughtLeftThruster ? <GrayLeftThruster className="itemBox"/> : <LeftThruster className="itemBox"/>}
                    </a>
                    <a onClick={this.handleClickLeftStructure} id="atag">
                        {this.state.isBoughtLeftStructure ? <GrayLeftStructure className="itemBox"/> : <LeftStructure className="itemBox"/>}
                    </a>
                    <a onClick={this.handleClickRightStructure} id="atag">
                        {this.state.isBoughtRightStructure ? <GrayRightStructure className="itemBox"/> : <RightStructure className="itemBox"/>}
                    </a>
                    <a onClick={this.handleClickRightThruster} id="atag">
                        {this.state.isBoughtRightThruster ? <GrayRightThruster className="itemBox"/> : <RightThruster className="itemBox"/>}
                    </a>
                    <a onClick={this.handleClickFuelTank} id="atag">
                        {this.state.isBoughtFuelTank ? <GrayFuelTank className="itemBox"/> : <FuelTank className="itemBox"/>}
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>                
                <br/>
                <br/>
                <br/>                
                <br/>
                <div>
                    <input type="text" onChange={this.handleText}/>
                    <br/>
                    <button onClick={this.handleSubmit}> save </button>
                </div>
            </div> 
        );
    }
}

export default Store;