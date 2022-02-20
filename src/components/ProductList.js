import React, {Component} from 'react'
import Product from './Product'
import Title from './Title'
import { ProductContext } from "../context";

class ProductList extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductContext.Consumer>{value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product}/>
                                })
                            }}</ProductContext.Consumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
 
export default ProductList;