import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';

const CartCard = (props) => {
    
    return (
        <div>
            <Card style={{ width: '16rem' }}>
                <Card.Body>
                    <Card.Img style={{ height: '6rem' }} variant="top" src={props.product.img} />
                    <Card.Title>{props.product.name}</Card.Title>
                    <Button>Delete</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CartCard;