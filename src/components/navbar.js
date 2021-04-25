import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import CommandCenter from './commandCenter';
import Game from './game'; 
/*class NavBar extends React.Component{
    state = {};
    render() {
       return (
            <div id="bar">
                <Nav className="ml-auto">
                    <Nav.Link href="/">CommandCenter</Nav.Link>
                    <Nav.Link href="/game">Game</Nav.Link>
                </Nav>
            </div>
        );
    }
}
export default NavBar;*/

const NavBar = () => {
    const history = useHistory();

    const HandleTheGame = () => {
        history.push('/stonk-game')
    }
   const handleTheCommandCenter = () => {
        history.push('/')
    }

    return(
        <div>
            <a onClick={HandleTheGame} id="stock-button">Stonks</a>
            <a onClick={handleTheCommandCenter} id="home-button">Command Center</a>
        </div>
    ) 
}
//</BrowserRouter> 
    
export default NavBar;
/*{/* <Route path="/stonks-game" component={Game}></Route> }


    {/* const history = useHistory(); }

    {/* const Store = () => { }
        {/* history.push('./store') }

    </BrowserRouter>}


            { <div id="store">STORE</div> }
            { <button onClick={Store} id="store-button">Store</button> }

 }
const NavBar = () => {
     <div>
         <ul>
             <li><Link to="/commandcenter">CommandCenter</Link></li>
            { <li><Link to ="/store">store</Link></li> }
         </ul>
     </div>
 );
 const CommandCenter = () => <h1>Command Center</h1>;
 const Store = () => <h1>Store</h1>;

 class App extends Component {
     constructor() {
         super();
         this.state = {
             name: 'React'
         };
     }
     render () {
         return (
             <Router>
                 <div>
                     <NavBar />
                     <Route exact path="/commandcenter" component={CommandCenter} />
                     <Route path="/store" component={Store}/>
                 </div>
             </Router>
         );
     }

 }
 render (<App />, document.getElementById('root')); */
