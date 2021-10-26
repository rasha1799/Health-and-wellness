import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';


const ServiceLoad = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
  fetch('./gym.json').then(res=>res.json()).then(data=>setServices(data));
  
  
    },[])
    return (
        <div className='mt-5'>
            
     <div>
     <Row xs={1} md={3} className="g-4">
       {
          
         services.map(service=><Services key={service.name} service={service}></Services>)
        
       }
       </Row>
     </div>
        </div>
    );
};

export default ServiceLoad;