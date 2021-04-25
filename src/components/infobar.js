import React from 'react';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import '../styles/infoBar.scss';

import db from '../firebase'
import firebase from 'firebase'


const InfoBar = () => {

    return (
        <div id="info-bar">
            <DogeCoin id="doge-logo"></DogeCoin>
            <div id="goal-text">GET ELON TO THE MOON</div>
            <div id="cash-balance">$ 20,000</div>
        </div>
    )
}

export default InfoBar;