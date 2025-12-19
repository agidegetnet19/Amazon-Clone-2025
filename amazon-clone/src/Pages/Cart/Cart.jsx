import React, { useContext, useReducer } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
    const [{ basket, user }, dispatch] = useContext(DataContext)
    const total = basket.reduce((amount, item) => {
        return (item.price * item.amount) + amount;
    }, 0)


    const increrment = (item) => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: item
        })
    }

    const decrement = (id) => {
        dispatch({
            type: Type.REMOVE_FROM_BASKET,
            id: id
        })
    }
    return (
        <LayOut>
            <section className={classes.container}>
                <div className={classes.card_container}>
                    <h1>Hello</h1>
                    <h3>you shoping basket</h3>
                    <hr />
                    {basket?.length == 0 ? (<p>opps ! no item in your cart</p>) : (basket?.map((item, i) => {
                        return (
                            <section className={classes.cart_product} >
                                <ProductCard
                                    key={i}
                                    product={item}
                                    renderDesc={true}
                                    flex={true}
                                    renderAdd={false} />
                                <div className={classes.btn_container}>
                                    <button onClick={() => increrment(item)}><IoIosArrowUp size={20} /></button>
                                    <span>{item.amount}</span>
                                    <button onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                                </div>
                            </section>
                        )
                    })
                    )
                    }

                </div>
                {
                    basket?.length !== 0 && (
                        <div className={classes.subtotal}>
                            <div>
                                <p>subtotal ({basket.length}) items</p>
                                <CurrencyFormat amount={total} />
                            </div>
                            <span>
                                <input type="checkbox" />
                                <small>this order contains a gift</small>
                            </span>
                            <Link to='/payments'>continue to checkout</Link>
                        </div>
                    )
                }

            </section>
        </LayOut>
    )
}

export default Cart