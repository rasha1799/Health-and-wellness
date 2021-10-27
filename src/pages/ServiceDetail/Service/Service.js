import React from 'react';

const Service = (props) => {
    const {name,image,description}=props.data;
    return (
        <div>
        <img src={image}/>
        {description}
        </div>
    );
};

export default Service;