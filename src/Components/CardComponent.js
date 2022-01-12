import React from 'react';
import { Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap';

const CardComponent = (props) => {

    const { name, img, seller, price, stock, key } = props.products;

    return (

        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        By: {seller}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{price}</ListGroupItem>
                        <ListGroupItem>{stock}</ListGroupItem>
                    </ListGroup>
                    <Button onClick={() => props.whoami(props.products)} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CardComponent;