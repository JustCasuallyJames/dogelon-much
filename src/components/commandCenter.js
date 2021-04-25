import React, {useState} from 'react';
import '../styles/commandCenter.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import { ReactComponent as Stars } from '../styles/graphics/stars.svg';
import { ReactComponent as LaunchButton } from '../styles/graphics/launch-button.svg';
import { ReactComponent as Grass } from '../styles/graphics/grass.svg';
import { ReactComponent as SpaceShuttleOff} from '../styles/graphics/shuttle-boost-off.svg';
import { ReactComponent as Platforms} from '../styles/graphics/both-platforms.svg';
import { ReactComponent as SpaceShuttleOn} from '../styles/graphics/shuttle-boost-on.svg';
import InfoBar from './infobar';
import NavBar from './navbar';

const CommandCenter = () => {
    const [fireOpacity, setFireOpacity] = useState(0);
    const [fakeOpacity, setFakeOpacity] = useState(1);
    const [botVal, setBotVal] = useState("0px");
    var bot = 0;

    const launch = () => {
        var opacity = fireOpacity;
        var fakeOp = fakeOpacity;
        var botString = "";
        var interval = setInterval(() => {
            opacity += 0.3;
            fakeOp -= 0.1;
            bot += 5;
            botString = String(bot) + "px";
            setBotVal(botString);
            setFireOpacity(opacity);
            setFakeOpacity(fakeOp);
            console.log(botString);
        }, 50);
    }

    return (
        <div id="background-gradient">
            <Stars id="stars"></Stars>
            <InfoBar></InfoBar>
            <NavBar/>
            <LaunchButton id="launch-button" onClick={launch}></LaunchButton>
            <Grass id="grass"></Grass>
            <SpaceShuttleOff id="shuttleOff" style={{opacity: fakeOpacity, bottom: botVal}}></SpaceShuttleOff>
            <SpaceShuttleOn id="shuttleOn" style={{opacity: fireOpacity, bottom: botVal}}></SpaceShuttleOn>
            <Platforms id="platforms"></Platforms>
        </div>
    )
}

export default CommandCenter;