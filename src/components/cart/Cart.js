import React from "react";
import { ProductContext } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

class Cart extends React.Component {
    render() { 
        return <section>
            <ProductContext.Consumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>
                        )
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductContext.Consumer>
        </section>
    }
}
 
export default Cart;
