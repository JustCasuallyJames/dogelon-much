import React from 'react';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import '../styles/infoBar.scss';


const InfoBar = () => {
    return (
        <div id="info-bar">
            <DogeCoin id="doge-logo"></DogeCoin>
            <div id="goal-text">GET ELON TO THE MOON</div>
            <div id="cash-balance">$ 700</div>
        </div>
    )
}

export default InfoBar;