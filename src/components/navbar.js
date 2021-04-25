import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../styles/navbar.scss';
import CommandCenter from './commandCenter';
import Game from './game'; 
import Store from './Store';

const NavBar = () => {
    const history = useHistory();

    const HandleTheGame = () => {
        history.push('/stonk-game')
    }
   const handleTheCommandCenter = () => {
        history.push('/')
    }

    const handleTheStore = () => {
        history.push('/store')
    }

    return(
        <div id="text-nav">
            <a onClick={handleTheCommandCenter} id="command-button">Command Center</a>
            <a onClick={HandleTheGame} id="stock-button">Stonks</a>
            <a onClick={handleTheStore} id="store-button">Store</a>
        </div>
    ) 
}


export default NavBar;

