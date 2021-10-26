import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import cc1 from '../../../../images/cc.jpg'
import cc2 from '../../../../images/fdgdfg.jpg'
import cc3 from '../../../../images/thfeegegdf4b1dc.jpg'
const Design = () => {
    return (
        <div className="my-5  lg-4 sm-6 xsm-12">
            
<CardGroup>
  <Card>
    <Card.Img variant="top" src={cc1} />
    <Card.Body>
      <Card.Title>MISSION</Card.Title>
      <Card.Text>
      Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness of everyone we work with.

To provide a personalised health and fitness service that unlocks every individual’s true potential so they can achieve their desired goals.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc2} />
    <Card.Body>
      <Card.Title>STORY</Card.Title>
      <Card.Text>
      Our main focus is functional training because of the proven benefits. With an emphasis on mobility, strength, and conditioning, the benefits of functional training differ from other workouts because of the way it targets your body.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc3} />
    <Card.Body>
      <Card.Title>Approach</Card.Title>
      <Card.Text>
      
<span style={{fontWeight:'bold'}}>INOVATION + MOTIVATION = RESULTS</span> <br />

We are a hybrid gym and training facility. We have clean, state of the art facilities with the most knowledgeable staff and cutting-edge training methods. We offer open gym, team training, group classes, boxing, cycle and personal training.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        
        </div>
    );
};

export default Design;