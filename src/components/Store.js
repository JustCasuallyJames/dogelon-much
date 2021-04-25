import React, {Component} from 'react'
import '../styles/Store.scss'
import InfoBar from './infobar';
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
            name: "",
            docId: 0
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

    handleClickRocket() {
        this.setState(state => ({
            isBoughtRocket: true
        }));
        var rocketRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        rocketRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(1)
        });
    }

    handleClickLeftThruster() {
        this.setState(state => ({
            isBoughtLeftThruster: true
        }));
        var leftThrusterRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        leftThrusterRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(2)
        });
    }

    handleClickLeftStructure() {
        this.setState(state => ({
            isBoughtLeftStructure: true
        }));
        var rightPlatformRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        rightPlatformRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(3)
        });
    }

    handleClickRightStructure() {
        this.setState(state => ({
            isBoughtRightStructure: true
        }));
        var rightStructureRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        rightStructureRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(4)
        });
    }

    handleClickRightThruster() {
        this.setState(state => ({
            isBoughtRightThruster: true
        }));
        var leftPlatformRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        leftPlatformRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(5)
        });
    }

    handleClickFuelTank() {
        this.setState(state => ({
            isBoughtFuelTank: true
        }));
        var fuelTankRef = db.collection("users").doc(this.state.docId);

        // Set the "capital" field of the city 'DC'
        // Atomically remove a region from the "regions" array field.
        fuelTankRef.update({
            notPurchased: firebase.firestore.FieldValue.arrayRemove(6),

        });
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
            this.setState({
                docId:docRef.id
            })
        })
    }

    render() {
        return(
            <div className="background">
                <InfoBar/>
                <div>  
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