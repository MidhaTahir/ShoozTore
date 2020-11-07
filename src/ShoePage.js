import React, { useContext } from 'react'
import { Card } from "react-bootstrap";
import { MyContext } from "./context";

const ShoePage = ({ match }) => {

    const { DATA } = useContext(MyContext)
    const filteredData = DATA.filter(item => 
        item.id == match.params.shoeid
    );


    return (
        <div>
        {filteredData.map(({ id, ...otherProps }) => <MyCard key={id} {...otherProps}/>)}
        </div>
    )
}

export default ShoePage


const MyCard = ({ imageUrl, name, text,  }) => {
    return(
        <div>
            <Card style={{ width: '30rem', margin: 'auto'}}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 2 days ago</small>
                </Card.Footer>
            </Card>
        </div>
    )
}