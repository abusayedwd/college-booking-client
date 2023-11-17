import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCollege = () => {
        const allcollege = useLoaderData()
        console.log(allcollege) 
        
        return (
                <div>
                        <h1 className='text-3xl text-center font-bold my-12'>All College</h1>
            <div  className='grid md:grid-cols-3 gap-6'>
                {
                        allcollege.map((totalcollege,index) => 
                                <div key={index}>

<div>
                        <div className="card w-full card-compact  bg-base-100 shadow-xl">
                <figure><img src= {totalcollege.image} className='h-56 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{totalcollege.college_name}</h2>
                <p>Admission Date :{totalcollege.admission_date}</p>
                <p> Event :{totalcollege.event}</p>
                 <p>Rattings : {totalcollege.ratting}</p>
                <div className="card-actions justify-end">
                <Link to =  {`/detail/${totalcollege._id}`}>
                <button className="btn btn-success">View Details</button>
                </Link>
                </div>
                </div>
</div>
                </div>


                                </div>
                                )

                }
                </div>
                </div>
        );
};

export default AllCollege;