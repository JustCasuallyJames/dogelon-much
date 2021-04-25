import React, {useState, useEffect} from 'react';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';
import '../styles/infoBar.scss';

import db from '../firebase'
import firebase from 'firebase'


const InfoBar = ({userId}) => {

    const [balance, setBalance] = useState(100);
    
    const getBalance = () =>{
        var docRef = db.collection("users").doc(userId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setBalance(doc.data().money);
                //console.log("Document data:", doc.data());
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    return (
        <div id="info-bar">
            <DogeCoin id="doge-logo" onClick={getBalance}></DogeCoin>
            <div id="goal-text" onClick={getBalance}>GET ELON TO THE MOON</div>
            <div id="cash-balance">${balance}</div>
        </div>
    )
}

export default InfoBar;