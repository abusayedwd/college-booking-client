import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Collegename = ({name}) => {

        return (
                <div className='my-8 w-[30%] mx-auto'>
                        <img className='h-80 w-96 rounded-3xl' src= {name.image} alt="" />
                   <div>
                   <Link to = '/info' className='text-1xl flex items-center gap-2  text-blue-500 font-bold'>
                  Click hear <FaCheckCircle></FaCheckCircle> 
                   <button>{name.college_name}</button>
                   </Link> 
                   <hr className='text-white text-2xl border-blue' /> 
                  </div> 
                     
                </div>
        );
};

export default Collegename;