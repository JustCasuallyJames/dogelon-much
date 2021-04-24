import React, {Component} from 'react'
import '../styles/Store.scss'
import InfoBar from './infobar';
import {ReactComponent as ItemBox} from '../pictures/Item Box.png'

class Store extends Component {
    render() {
        return(
            <div className="background">
                <InfoBar/>
                <ItemBox/>
            </div> 
        );
    }
}

export default Store;