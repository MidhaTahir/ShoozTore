import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Route, Link, Switch, withRouter } from "react-router-dom";

const Preview = ({ id ,name, imageUrl, price, text, history }) => {

    const Clicked = (id) => {
        history.push(`/${id}`)
    }

    return (
        <div> 
            <Card style={{ width: '20rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{text} : ${price}</Card.Text>
                <Button variant="secondary" onClick={(e) => Clicked(id)}>Shop Now</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(Preview);
