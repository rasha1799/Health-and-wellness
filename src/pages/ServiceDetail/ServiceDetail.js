import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceDetail} = useParams();
    return (
        <div>
            <h2>this is service: {serviceDetail}</h2>
            
        </div>
    );
};

export default ServiceDetail;