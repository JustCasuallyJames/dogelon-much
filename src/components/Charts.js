import React, {Component} from 'react';
import CanvasJSReact from '../canvasJS/canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;


class Charts extends Component {
    constructor(props) {
        super(props);
        this.generateDataPoints = this.generateDataPoints.bind(this);
        }
        generateDataPoints(noOfDps) {
            var xVal = 0, yVal = 100;
            var dps = [];
            for(var i = 0; i <= noOfDps; i++) {
                yVal = yVal +  Math.round(5 + Math.random() * (-5-5));
                dps.push({x: xVal, y: yVal});  
                xVal++;
            }
            return dps;
        }
        
        render() {
        const options = {
            title:{
            text:"Elon Simulator"
            },
            animationEnabled: true,
            animationDuration: 10000,
            charts: [{
                data: [{
                    type: "line",
                    dataPoints: this.generateDataPoints(100)
                }]
            }],   
            rangeSelector: {
                enabled: false,
                inputFields: {
                    startValue: 0,
                    endValue: 60,
                }
            },
            navigator:{
            },
            backgroundColor: "",
            theme: "light1"
            
        };
        const containerProps = {
            width: "100%",
            height: "450px",
            margin: "auto"
        };
        
        return (
            <div> 
            <div>
                <CanvasJSStockChart containerProps={containerProps} options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
            </div>
        );
        }
}
export default Charts;

