import React, {useState} from 'react';
import '../styles/login.scss';
import { useHistory } from 'react-router-dom';

//import db from '../firebase';
//import firebase from 'firebase';

const Login = () => {

    const history = useHistory();
    
    const handleClickGame = (path) => {
        history.push(path);
    }

    const [name, setName] = useState('');

    const submitName = () => {
        history.push('/command-center');
    }

    return (
        <div id="background-gradient">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <p className="headline" id="first">ELON NEEDS YOUR HELP <br></br>TO GET TO THE MOON</p>
            <p className="headline" id="second">INVEST IN DOGECOIN TO BUILD WEALTH
                <br></br> AND BUY PARTS TO BUILD A ROCKET
            </p>
            <p className="headline" id="third">UP FOR THE CHALLENGE?</p>
            <div className="headline" id="fourth">
                <input id="username" placeholder="Username" autocomplete="off"
                    onChange={event => setName(event.target.value)}/>
                <button id="enterUser" onClick={submitName}className="btn btn-primary">START</button>
            </div>
            
        </div>
    )
}

export default Login;