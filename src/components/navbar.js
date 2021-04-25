import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/navbar.scss';


const NavBar = () => {
    const [commandWeight, setCommandWeight] = useState(900);
    const [commandColor, setCommandColor] = useState("#F8BF1A");
    const [stonkWeight, setStonkWeight] = useState("normal");
    const [stonkColor, setStonkColor] = useState("white");
    const [storeWeight, setStoreWeight] = useState("normal");
    const [storeColor,  setStoreColor] = useState("white");

    const history = useHistory();
    
    const handleClickGame = (path) => {
        history.push(path)
    }

    return(
        <div id="nav-bar">
            <nobr onClick={() => handleClickGame('/command-center')}
                id="cmd-btn" style={{fontWeight: commandWeight, color: commandColor, cursor: "pointer"}}>
                COMMAND CENTER
            </nobr>
            <nobr onClick={() => handleClickGame('/stonk-game')} 
                id="stock-btn" style={{fontWeight: stonkWeight, color: stonkColor, cursor: "pointer"}}>
                STONKS
            </nobr>
            <nobr onClick={() => handleClickGame('/store')} 
                id="store-btn" style={{fontWeight: storeWeight, color: storeColor,cursor: "pointer"}}>
                STORE
            </nobr>
            
        </div>
    ) 
} 
    
export default NavBar;
