import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt,  } from "react-icons/fa";

 
const Myinfo = ({myinfo, handleDelete}) => {
         const {adress, candidatename, dateofbirth, email, image, phone, subject, _id} = myinfo;
     
       
 
 return ( 
        
        <tr> 
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{candidatename}</div>
               
            </div>
          </div>
        </td>
        <td>
                {email}
        </td>
        <td>
                {adress}
        </td>
        <td>
           {dateofbirth}
        </td>
        <td>
            {phone}
        </td>
        <td>
            { subject}
        </td>
         
        <td className="flex">
              
                <Link  to = {`/updateinfo/${_id}`} className="mr-8 flex items-center mt-2"><FaEdit></FaEdit> update</Link>
                <Link className=" flex items-center mt-2"  onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt>delete</Link>
        </td>
         
      </tr> 
    
      
             
        );
};

export default Myinfo;