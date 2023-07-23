import React from 'react';
import { photos } from './Photos';
import Gallery from 'react-photo-gallery';

const PhotoGallery = () => {
        return (
                <div>
                       <h1 className='text-3xl text-center text-gray-500 font-bold mb-6 mt-16'>Graduate person Gallery</h1>
                  <Gallery photos={photos}   />   
                </div>
        );
};

export default PhotoGallery;