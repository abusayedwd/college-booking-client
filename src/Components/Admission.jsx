import { useEffect, useState } from 'react';
import Collegename from './Collegename';

const Admission = () => {
 const [name, setName] = useState([])
        useEffect( () => {
                fetch(`https://college-booking-server-alpha.vercel.app/allcollege?search`)
                .then(res => res.json())
                .then(data => setName(data))
               

        }, [ ])
        
        return (
                <div className=' bg-slate-200'>
                        <h1 className='text-2xl text-orange-400 font-bold my-10 text-center'>Most Pupolar College</h1>
                        {
                                name.map(namecollege => 
                                    <Collegename key={namecollege._id}
                                    name = {namecollege}
                                    ></Collegename>    
                                        )
                        }
                </div>
        );
};

export default Admission;