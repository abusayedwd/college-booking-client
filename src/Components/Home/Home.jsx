import React from 'react';
import College from './College';
import Gallery from './PhotoGallery';
import Benner from './Benner';
 
 

const Home = () => {
        return (
                <div>
                      <Benner></Benner>
                      <College></College>
                       <Gallery></Gallery>
                       
                </div>
        );
};

export default Home;