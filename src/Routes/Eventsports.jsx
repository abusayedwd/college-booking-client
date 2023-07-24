import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Eventsports = () => {
        const eventsport = useLoaderData();
        
        return (
                <div>
                        <h1 className='text-2xl font-bold text-center mt-6'>Event & Sports Details:</h1>

                        <h1 className='text-3xl text-orange-400 font-bold text-center mt-6'>{eventsport.college_name}</h1>
                     <div className='md:flex my-12 justify-between gap-16 items-center'>
                     

                     <div className='w-[50%] ml-20'>
                     {
        eventsport.sports_category.map((sports, i) => 
                <><p key={i}>
                       <span className='text-2xl font-bold'> Sports</span> :  {sports.sport} 
                </p>
                <p >team: {sports.team_name}</p>
                <p>Championships won : {sports.championships_won}</p>
                </>
                )
    }  
                     </div>
                    <div className='w-[50%] ml-20'>
                     <h1 className='text-1xl font-bold'><span className='text-2xl'>Event: </span>{eventsport.event}</h1> 
                     <p>Event detais : a party or reception during which anyone who wishes may visit to share in a celebration, meet a special guest, etc. 2. a time during which a school, institution, etc., is open to the public for exhibition or for some specific occasion.</p>  
                   </div> 

                     </div>
                   <Link to = '/allcollege'> 
                   <button className='btn btn-accent'>back</button>
                   </Link>
                </div>
        );
};

export default Eventsports;