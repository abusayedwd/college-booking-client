import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Collegedetails = () => {
      const singlecollege = useLoaderData()
     
      const {  college_name
,image,  sports_category,admission_process} = singlecollege;

        
        return (
                <div className='mt-12'>
                      <div className="card card-side bg-base-100">
  <figure><img className='w-full h-full' src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">Name College: {college_name}</h2>
    <p><span className='text-1xl font-bold'>Admission Process:</span> : {admission_process}</p>
    <p><span className='text-1xl font-bold'>Sports Category:</span></p>
    {
        sports_category.map((sports, i) => 
                <>
                <li key={i}>
                        sports :  {sports.sport} 
                </li>
                <p >team: {sports.team_name}</p>
                <p>Championships won : {sports.championships_won}</p>
                </>
                )
    }
    <p> <span className='text-1xl font-bold'>Research college:</span> As you might guess, a research university prioritizes research. At these institutions, graduate students, postdocs, and professors conduct original research in diverse fields. Research universities can be public or private institutions.</p>
    <div className="card-actions justify-end">
      <Link to ='/'><button className="btn btn-primary">Back</button></Link>
    </div>
  </div>
</div>
                </div>
        );
};

export default Collegedetails;