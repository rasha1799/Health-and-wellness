import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DIetPlans from '../DietPlans/DIetPlans';
import './DietData.css'

const Dietdata = () => {
    const [diets,setdiets]=useState([]);
    useEffect(()=>{

fetch('./dietPlans.json').then(res=>res.json()).then(data=>setdiets(data))

    } ,[])
    return (
        <div className="diet-container mt-5">
            <h2 style={{fontWeight:'bold'}}>Diet Packages</h2>
            <Row xs={1} md={3} className="g-4">
            {
                diets.map(diet=><DIetPlans diet={diet}></DIetPlans>)
            }
         </Row>
        </div>
    );
};

export default Dietdata;