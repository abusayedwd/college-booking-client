import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Collegename = ({name}) => {

        return (
                <div className='my-8 ml-16'>
                   <Link to = '/info' className='text-1xl flex items-center gap-2  text-blue-500 font-bold'>
                   <FaCheckCircle></FaCheckCircle> 
                   <button>{name.college_name}</button>
                   </Link>     
                </div>
        );
};

export default Collegename;