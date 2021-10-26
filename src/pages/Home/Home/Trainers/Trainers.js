import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';

const About = () => {
    const [trainers,setTrainers]=useState([]);
    useEffect(()=>{
fetch('./trainer.json').then(res=>res.json()).then(data=>setTrainers(data))

    },[])
    return (
     <div>
<h2>
         About Us
     </h2>
     <Row xs={1} md={2} className="g-6 ">
{
    trainers.map(trainer=><Trainer key={trainer.name} trainer={trainer}></Trainer>)
}
</Row>
<div>
     <h2>Contact us:</h2>
     <h3>Location:Mission Road,Sylhet</h3>
     <h3>Email:mahque@gmail.com</h3>
        </div>
     </div>
    );
};

export default About;