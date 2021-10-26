
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { name,image,duration,description,price }=props.service||{}
    return (
        <div>
           
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            <p>{duration}</p>
            
          </Card.Text>
          <h4>Price:$ {price}</h4>
            <Link to={`/service/${name}`}><Button>Enroll {name}</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  
        </div>
    );
};

export default Services;