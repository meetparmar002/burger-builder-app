import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'}
];

export default function buildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p className={classes.Price}>Total Price: <strong>&#x20b9;{props.price}</strong></p>
            {controls.map(cntr=>{
                return <BuildControl 
                    key={cntr.label} 
                    label={cntr.label} 
                    type={cntr.type} 
                    addIngredient={props.addIngredient}
                    rmvIngredient={props.rmvIngredient}
                    disabled={props.disabledInfo[cntr.type]}
                />
            })}
            <button className={classes.Rmvall} onClick={props.rmvall}>Remove All</button>
            <button className={classes.OrderButton} disabled={props.purchasable}>ORFER NOW</button>
        </div>
    )
}
