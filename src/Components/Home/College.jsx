import { key } from 'localforage';
import React, { useEffect, useRef, useState } from 'react';
import Collegeshow from './Collegeshow';

const College = () => {
        const [allCollege, setallCollege] = useState([])
        const searchRef = useRef(null)
        const [search, setSearch] = useState('')
        useEffect( () => {
                fetch(`http://localhost:5000/allcollege?search=${search}`)
                .then(res => res.json())
                .then(data => setallCollege(data))
               

        }, [search])
        const handleSearch = () => {
                 
                setSearch(searchRef.current.value);
        }
        return (
                
                <div>
                        <div className="form-control mt-12">
  <div className="input-group">
    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
                        
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