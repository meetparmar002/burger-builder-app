import React from 'react'
import BurgerIngrdient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

export default function Burger() {
    return (
        <div className={classes.Burger}>
            <BurgerIngrdient type="bread-top"/>
            <BurgerIngrdient type="salad"/>
            <BurgerIngrdient type="cheese"/>
            <BurgerIngrdient type="meat"/>
            <BurgerIngrdient type="bacon"/>
            <BurgerIngrdient type="bread-bottom"/>
        </div>
    )
}
