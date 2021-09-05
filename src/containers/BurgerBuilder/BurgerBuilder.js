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

    updatePurchaseState=(ingredients)=>{
        const sum=Object.keys(ingredients).map(
            (key)=>ingredients[key]
        ).reduce(
            (sum,el)=>sum+el
        ,0);
        this.setState({purchasable:sum>0});
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
        this.updatePurchaseState(newIngredients);
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
        this.updatePurchaseState(newIngredients);
    }

    rmvAllHaldler=()=>{
        const newIngredients={
            ...this.state.ingredients
        };
        for(let key in newIngredients)
            newIngredients[key]=0;
        this.setState({
            ingredients:newIngredients,
            totalPrice:10,
            purchasable:false
        })
    }

    render() {
        const disabledInfo={
            ...this.state.ingredient
        }
        for(let key in disabledInfo)
            disabledInfo[key]=disabledInfo[key]<=0;
        console.log(disabledInfo);
        console.log("addIngredientHandler totalProce: ",this.state.totalPrice);
        console.log('updatePusrchaseState purchase: ',this.state.purchasable);
        return (
            <Aux>
                
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ing={this.state.ingredients}
                    addIngredient={this.addIngredientHandler} 
                    rmvIngredient={this.rmvIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    rmvall={this.rmvAllHaldler}
                    isPurchasable={this.state.purchasable}
                />
                
            </Aux>
        );
    }    
}
export default BurgerBuilder