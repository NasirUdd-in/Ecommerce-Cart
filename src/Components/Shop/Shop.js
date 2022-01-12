import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../CardComponent';
import Cart from './Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);


    const whoami = (product) => {

        const totalProduct = [...cart, product];
        setCart(totalProduct);
        // console.log("hello");
    }

    return (
        <Container>
            <div className="allSection">

                <div className="allProducts">
                    <Row xs={1} md={1} lg={3} className="g-4" >

                        {
                            products.map((products) => <CardComponent key={products.key} products={products} whoami={whoami} ></CardComponent>)
                        }

                    </Row>
                </div>
                <div className="allCart" fixed="top" >
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </Container>
    );
};

export default Shop;