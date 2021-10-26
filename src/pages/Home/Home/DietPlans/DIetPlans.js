import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './DIetPlans.css'

const DIetPlans = (props) => {
    const {name,image,description,duration,price}=props?.diet||{}
    return (
        <div >
             <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            <p>{duration}</p>
            <h4>Price:$ {price}</h4>
            <Button>Enroll Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
            
        </div>
    );
};

export default DIetPlans;