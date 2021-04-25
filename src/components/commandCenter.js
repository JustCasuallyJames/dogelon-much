import React from 'react';
import '../styles/commandCenter.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import { ReactComponent as Stars } from '../styles/graphics/stars.svg';
import { ReactComponent as LaunchButton } from '../styles/graphics/launch-button.svg';
import { ReactComponent as Grass } from '../styles/graphics/grass.svg';
import InfoBar from './infobar';
import NavBar from './navbar';

const CommandCenter = () => {
    const history = useHistory();
    
    const handleClickGame = (foo) => {
        history.push(foo)
    }

    const HandleTheGame = () => {
        history.push('/stonk-game')
    }

    return (
        <div id="background-gradient">
            <InfoBar></InfoBar>
            <NavBar/>
            {/* <button onClick={HandleTheGame}></button> */}
            {/* <button onClick={() => handleClickGame('/stonk-game')} id="stock-button">Stonks</button> */}
            <Stars id="stars"></Stars>
            <LaunchButton id="launch-button"></LaunchButton>
            <Grass id="grass"></Grass>
        </div>
    )
}

export default CommandCenter;