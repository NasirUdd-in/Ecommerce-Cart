import React from 'react';
import { Card, Container, Row, Stack } from 'react-bootstrap';
import CartCard from './CartCard'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (

        <Container>
            <Stack gap={3}>
                <div className="bg-light border">
                    <h3>Order Summary</h3>
                    <h4>Total: {total.toFixed(2)}</h4>
                </div>
                <div className="bg-light border">
                    <Stack gap={3}>
                        {
                            cart.map((product) => <CartCard product={product} ></CartCard>)
                        }
                    </Stack>
                </div>

            </Stack>
        </Container>

    );
};

export default Cart;