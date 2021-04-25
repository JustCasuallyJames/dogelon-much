import React from 'react';
import '../styles/commandCenter.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import { ReactComponent as Stars } from '../styles/graphics/stars.svg';
import { ReactComponent as LaunchButton } from '../styles/graphics/launch-button.svg';
import { ReactComponent as Grass } from '../styles/graphics/grass.svg';
import InfoBar from './infobar';
import NavBar from './navbar';

import fire from '../firebase';

const CommandCenter = () => {


    return (
        <div id="background-gradient">
            <Stars id="stars"></Stars>
            <InfoBar></InfoBar>
            <NavBar/>
            <LaunchButton id="launch-button"></LaunchButton>
            <Grass id="grass"></Grass>

        </div>
    )
}

export default CommandCenter;