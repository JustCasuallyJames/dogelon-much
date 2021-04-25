import React from 'react';
import '../styles/game.scss';
import '../styles/infoBar.scss';

//graphics
import HappyElon from '../styles/graphics/happy_Elon.png';
import SadElon from '../styles/graphics/sad_Elon.png';
import HappyElonUp from '../styles/graphics/happy_Elon up.png'
import {ReactComponent as DogeClicker} from '../styles/graphics/doge-click.svg';
import { ReactComponent as DogeCoin } from '../styles/graphics/dogecoin.svg';

//souds
//import useSound from 'use-sound';
//import Owa from '../styles/sounds/owa.mp3';
//import Bonk from '../styles/sounds/bonk.mp3';
//import Wow from '../styles/sounds/wow.mp3';

const maxes = [1,1,1,1,1,1,1,1,10,10]; 
const generateRandom = () => {
    var max = 1;
    max = maxes[Math.floor(Math.random() * maxes.length)];
    var min = 0.01;
    var random = (Math.random() * (max-min) + min).toFixed(2)
    console.log(random);
    return random;
} 

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elon: HappyElon,
            limitValue : generateRandom(),
            dogeCoins: 5,
            balance: 100,
            price : 0.01,
            profit: 0.01,
            totalCost: 0.00,
            again: "",
            buyEnable: false,
            playAgain: false,
            buyAmount: 5,
            crashed: "",
            
        }
        this.animateMusk = this.animateMusk.bind(this);
        this.start = this.start.bind(this);
        this.handleCrash = this.handleCrash.bind(this);
        this.sellAll = this.sellAll.bind(this);
        this.buyCoin = this.buyCoin.bind(this);
        this.calculateProfit = this.calculateProfit.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }
    
    calculateProfit() {
        var newProfit = ((this.state.dogeCoins * this.state.price) - this.state.totalCost).toFixed(2);
        this.setState({profit: newProfit})
    }

    animateMusk() {
        if (this.state.elon == HappyElon){
            this.setState({elon: HappyElonUp});
        }
        else {
            this.setState({elon : HappyElon});
        }
    }


    buyCoin() {
        if (this.state.buyEnable == true) {
            var cost = Number(this.state.price) * Number(this.state.buyAmount);
            if (Number(this.state.balance)-cost >= 0){
                var newBalance = +(this.state.balance - cost).toFixed(2);
                var newTotalCost = this.state.totalCost + cost;
                this.setState({dogeCoins: this.state.dogeCoins+this.state.buyAmount, balance: newBalance, totalCost: newTotalCost})
            } 
        }
    }

    handleCrash() {
        if (this.state.price == this.state.limitValue) {
            clearInterval(this.interval);
            this.setState({buyEnable: false, elon: SadElon, crashed: "CRASHED!"})
        }
    }

    start() {
        clearInterval(this.interval);
        if (this.state.playAgain == true) {
            this.setState(
                {
                    limitValue : generateRandom(),
                    dogeCoins: 5,
                    price : 0.01,
                    profit: 0.01,
                    totalCost: 0.00,
                    buyEnable: true,
                    elon: HappyElon
                }
            )
        }
        this.setState({again: "again"});
        this.interval = setInterval(() => {
            var newPrice = +(this.state.price + 0.01).toFixed(3);
            this.setState({price: newPrice, buyEnable: true, playAgain: true});
            this.animateMusk();
            this.handleCrash();
            this.calculateProfit();
        }, 500);
    }

    sellAll() {
        if (this.state.buyEnable == true) {
            clearInterval(this.interval);
            
            var newBalance = (Number(this.state.balance) + 
                Number(this.state.profit) + Number(this.state.totalCost)).toFixed(2);
            this.setState(
                {
                    balance: newBalance,
                    buyEnable: false
                }
            )
        }
    }

    playAgain() {
        clearInterval(this.interval);
        this.setState(
            {
                limitValue : generateRandom(),
                dogeCoins: 5,
                price : 0.01,
                profit: 0.01,
                totalCost: 0.00,
                buyEnable: true,
                elon: HappyElon
            }
        )
        this.start();
    }

    render() {
        return(
            <div id="background-gradient">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
                <div id="info-bar">
                    <DogeCoin id="doge-logo"></DogeCoin>
                    <div id="goal-text">GET ELON TO THE MOON</div>
                    <div id="cash-balance">$ {this.state.balance}</div>
                </div>

                <div id="game-container">
                    <div id="stats">
                        <p id="doge-price">Price: $ {this.state.price} <nobr id="crashed">{this.state.crashed}</nobr> </p>
                        <p id="doge-price">Dogecoins: {this.state.dogeCoins}</p>
                        <p id="doge-price">Profit: {this.state.profit}</p>
                    </div>
                    <div id="elonmeter">
                        <img src={this.state.elon} id="elon"></img>
                        <p>ELON-METER</p>
                    </div>
                    <div id="game-btns">
                        <DogeClicker id="doge-clicker" onClick={this.buyCoin}></DogeClicker>
                        <button type="button" class="btn btn-danger btn-lg"
                            id="sell-btn" onClick={this.sellAll}>
                            Sell All
                        </button>
                        <button class="btn btn-info btn-lg"
                            id="play-again-btn" onClick={this.start}>
                            Play {this.state.again}
                        </button>
                    </div>
                </div>

            </div>
        )
    }

}


export default Game;