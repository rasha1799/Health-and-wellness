import React from 'react';
import ServiceLoad from '../Home/ServiceLoad/ServiceLoad'
import Banner from './Banner/Banner';
import Design from './Design/Design';
import Dietdata from './DIetData/Dietdata';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner> 
           <ServiceLoad></ServiceLoad>
           <Dietdata></Dietdata>
           <Design></Design>
        </div>
    );
};

export default Home;