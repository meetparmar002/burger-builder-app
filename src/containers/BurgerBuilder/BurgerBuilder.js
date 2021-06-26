import {React,Component} from 'react'
import Aux from '../../hoc/Auxi'
// import classes from './BurgerBuilder.module.css'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls';
const INGREDIENT_PRICE={
    cheese:20,
    meat:50,
    salad:10,
    bacon:30
}
class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:10,
        purchasable:false
    }

    addIngredientHandler=(type)=>{
        const newCount=this.state.ingredients[type]+1;
        const newIngredients={
            ...this.state.ingredients
        };
        newIngredients[type]=newCount;
        const newPrice=this.state.totalPrice+INGREDIENT_PRICE[type];
        console.log(INGREDIENT_PRICE[type]);
        this.setState({
            ingredients:newIngredients,
            totalPrice:newPrice
        });
    }

    rmvIngredientHandler=type=>{
        const newCount=this.state.ingredients[type]-1;
        if(newCount===-1) return;
        const newIngredients={
            ...this.state.ingredients
        };
        newIngredients[type]=newCount;
        const newPrice=this.state.totalPrice-INGREDIENT_PRICE[type];
        this.setState({
            ingredients:newIngredients,
            totalPrice:newPrice
        });
    }

    rmvAllHaldler=()=>{
        const newIngredients={
            ...this.state.ingredients
        };
        for(let key in newIngredients)
            newIngredients[key]=0;
        this.setState({
            ingredients:newIngredients,
            totalPrice:10
        })
    }

    checkOrder=()=>{
        // let sum=0;
        // for(let key in this.state.ingredients)
        //     sum+=this.state.ingredients[key];
        const sum=Object.keys(this.state.ingredients).map(
            key=>{
                return this.state.ingredients[key];
            }
        ).reduce(
            (sum,el)=>{
                return sum+el;
            }
        ,0)
        this.setState({
            purchasable:sum>0
        })
    }
    render() {
        const disabledInfo={
            ...this.state.ingredient
        }
        for(let key in disabledInfo)
            disabledInfo[key]=disabledInfo[key]<=0;
        console.log(disabledInfo);
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredient={this.addIngredientHandler} 
                rmvIngredient={this.rmvIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.totalPrice}
                rmvall={this.rmvAllHaldler}
                purchasable={!this.purchasable}/>
                
            </Aux>
        );
    }    
}
export default BurgerBuilder