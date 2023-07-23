import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import Collegeshow from './Collegeshow';

const College = () => {
        const [allCollege, setallCollege] = useState([])
        useEffect( () => {
                fetch('http://localhost:5000/allcollege')
                .then(res => res.json())
                .then(data => setallCollege(data))
               

        }, [])
        console.log(allCollege)
        return (
                
                <div>
                        
                     <h1 className='font-bold text-center text-2xl mt-8 mb-16'>College</h1> 
                     <div className='grid md:grid-cols-3 gap-5'>
                     {
                        allCollege.slice(0,3).map(college => 
                           <Collegeshow 
                           key={college._id}
                           college = {college}
                           ></Collegeshow>   
                     )}
                     </div>
                     
                </div>
        );
};

export default College;