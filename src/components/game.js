import '../styles/game.scss';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
// import Charts from './Charts';
import InfoBar from './infobar';


function generateRandom() {
    var max = 30;
    var min = 10;
    var random_inflections = Math.floor(Math.random() * (max-min)) + min;
    return random_inflections;
}


const Game = () => {
    
    const[dogePrice, setDogePrice] = useState(3);

    const test = () => {
        setDogePrice(dogePrice+1);
    }

    return (
        <div id="background-gradient">
            <InfoBar></InfoBar>
            <p>{dogePrice}</p>
            <button onClick={test} id="buy-button">Buy</button>
            {/* <Charts></Charts> */}
            <canvas></canvas>
        </div>
    )
}

export default Game;