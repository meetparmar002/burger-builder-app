import React from 'react'
import BurgerIngrdient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

export default function Burger(props) {
    let tranformedIngredients=Object.keys(props.ingredients)
    .map(igkey=>{
        console.log(igkey)
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            console.log(igkey+i);
            return <BurgerIngrdient key={igkey+i} type={igkey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    });
    console.log(tranformedIngredients)
    if(tranformedIngredients.length===0){
        tranformedIngredients=<p>Please select at least one ingredient</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngrdient type="bread-top"/>
            {/* <BurgerIngrdient type="salad"/>
            <BurgerIngrdient type="cheese"/>
            <BurgerIngrdient type="meat"/>
            <BurgerIngrdient type="bacon"/> */}
            {tranformedIngredients}
            <BurgerIngrdient type="bread-bottom"/>
        </div>
    )
}
