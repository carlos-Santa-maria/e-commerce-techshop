import React from "react";
import Products from '../products.js';
import Product from '../components/Product.jsx';
import '../style sheets/Shopp.css'

const Shop = () =>{
    return(
        <div className ='shop'>
            <div className ='shop-tittle'>
                <h1> SantaTech Shop</h1>
            </div>
            <div className = 'products'>
                {Products.map((product) => (
                    <Product  data = {product}/>

                ))}
            </div>
        </div>
    );
};

export default Shop;