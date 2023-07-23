import { key } from 'localforage';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Collegeshow = ({college}) => {
         // eslint-disable-next-line react/prop-types
         const {admission_date, college_name,event, image, research_history,} = college;
        return (
                <div>
                        <div className="card w-full card-compact  bg-base-100 shadow-xl">
                <figure><img src= {image} className='h-56 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <p>Admission Date :{admission_date}</p>
                <p> Event :{event}</p>
                <p className='font-bold'>history :</p>{
                         
                        research_history.map((history, i ) => 
                            <li key={i}> publication count :{history.publication_count}, Year: {history.year}</li>
                             )
                        }
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
                </div>
                </div>
</div>
                </div>
        );
};

export default Collegeshow;