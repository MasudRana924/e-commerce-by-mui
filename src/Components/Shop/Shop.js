
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shop.css'
const Shop = (props) => {
    const {img}=props.product
    return (
        <Col className="mb-1 mt-1">
        <Card className="card-style" style={{ width: '18rem' }}>
                 <Card.Img variant="top"  src={img} />
                 <Card.Body>
                     <Card.Title>
                         <Link to="" className="details-link">Details</Link>
                     </Card.Title>
                      
                     <Card.Text>
                
                     </Card.Text>
                     <Link variant="primary " to="" >See Details</Link>
                 </Card.Body>

             </Card>
        </Col>
    );
};

export default Shop;