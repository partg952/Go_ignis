import React from 'react'
import '../../../assets/css/GoIgnisPromise.css';
import HandShake from '../../../assets/img/svg-export/handShake.svg';
import Badge from '../../../assets/img/svg-export/badge.svg';
import Truck from '../../../assets/img/svg-export/truck.svg';
import BestValue from '../../../assets/img/svg-export/bestvalue.svg';
function GoIgnisPromise() {
    return (
        <div id='main-container'>
            <h2>What does GoIGNIS promise?</h2>
             <main>
                <div style={{backgroundColor:'black'}}>
                     <img src={HandShake} alt="" />
                     <h3>IN-HOUSE TEAM</h3>
                </div>
                <div  style={{backgroundColor:'gray'}}>
                    <img src={Badge} alt="" />
                    <h3>QUALITY CONTROL</h3>
                </div>
                <div style={{backgroundColor:'#dadada'}}>
                    <img src={Truck} alt="" />
                    <h3>FAST DELIVERY</h3>
                </div>
                <div style={{backgroundColor:'aqua'}}>
                    <img src={BestValue} alt="" />
                    <h3>BEST VALUE</h3>
                </div>
            
             </main>
        </div>
    )
}

export default GoIgnisPromise
