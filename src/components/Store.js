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

class Store extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBoughtRocket: false,
            isBoughtLeftThruster: false,
            isBoughtRightThruster: false,
            isBoughtRightStructure: false,
            isBoughtLeftStructure: false,
            isBoughtFuelTank: false
        }

        //this binding is needed to make the this work in the callback
        this.handleClickRocket = this.handleClickRocket.bind(this);
        this.handleClickLeftStructure = this.handleClickLeftStructure.bind(this);
        this.handleClickRightStructure = this.handleClickRightStructure.bind(this);
        this.handleClickLeftThruster = this.handleClickLeftThruster.bind(this);
        this.handleClickRightThruster = this.handleClickRightThruster.bind(this);
        this.handleClickFuelTank = this.handleClickFuelTank.bind(this);
    }

    handleClickRocket() {
        this.setState(state => ({
            isBoughtRocket: true
        }));
    }

    handleClickLeftThruster() {
        this.setState(state => ({
            isBoughtLeftThruster: true
        }));
    }

    handleClickRightThruster() {
        this.setState(state => ({
            isBoughtRightThruster: true
        }));
    }

    handleClickLeftStructure() {
        this.setState(state => ({
            isBoughtLeftStructure: true
        }));
    }

    handleClickRightStructure() {
        this.setState(state => ({
            isBoughtRightStructure: true
        }));
    }

    handleClickFuelTank() {
        this.setState(state => ({
            isBoughtFuelTank: true
        }));
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
            </div> 
        );
    }
}

export default Store;