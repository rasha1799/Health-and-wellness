import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Trainer = (props) => {
    const {name,image,designation,description}=props.trainer||{}
    return (
        <div >
            <Col className="mb-4"  >
      <Card className="img-fluid ">
        <Card.Img  className='h-25 w-25 mx-auto' variant="top" src={image} />
        <Card.Body>
           <Card.Title>{name}</Card.Title> 
          <Card.Text>
            <p className="mb-6 fw-bold">{designation}</p>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Trainer;