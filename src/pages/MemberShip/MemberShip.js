import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import cc1 from '../../images/cc.jpg'
import cc2 from '../../images/fdgdfg.jpg'
import cc3 from '../../images/thfeegegdf4b1dc.jpg'
const MemberShip = () => {
    return (
        <div>
            <h1>MemberShip</h1>
            <p>
At Health and Wellness, membership not only gives you access to our clean and spacious gyms, it connects you with knowledgeable coaches and an uplifting community inside our gyms, at home and anywhere. We also make it easy to include friends and family, for extra inspiration on your journey/</p><br /><br />
<h2>MORE THAN A GYM MEMBERSHIP</h2>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={cc1} />
    <Card.Body>
      <Card.Title>One day pass</Card.Title>
      <Card.Text>
     <span className="text-warning"> $15/Per Day</span><br />

Whether you’re visiting us on business or are just taking your personal fitness one day at a time, we’d like to invite you to experience all that F7 has to offer. You are always Welcome
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc2} />
    <Card.Body>
      <Card.Title>Monthly pass</Card.Title>
      <Card.Text>
      <span className="text-warning"> $90/Per Month</span><br />

      Our monthly membership helps you to keep your fitness goals on track without a commitment of any kind,
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc3} />
    <Card.Body>
      <Card.Title>Yearly pass</Card.Title>
      <Card.Text>
      <span className="text-warning"> $60/Per Month</span><br />

      with a 1-year commitment, we offer a monthly membership for only $59. When you pre-purchase a complete year Individual 
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        </div>
    );
};

export default MemberShip;