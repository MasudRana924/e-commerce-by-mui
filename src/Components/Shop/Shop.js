
import React from 'react';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shop = (props) => {
    const {img}=props.product
    return (
        <Col>
        <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={img} />
                 <Card.Body>
                     <Card.Title></Card.Title>
                      
                     <Card.Text>
                
                     </Card.Text>
                     <Link variant="primary" to="" >See Details</Link>
                 </Card.Body>
             </Card>
        </Col>
    );
};

export default Shop;