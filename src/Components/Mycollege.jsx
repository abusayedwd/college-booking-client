import { useContext, useEffect, useState } from "react";
 
import Swal from "sweetalert2";
import Myinfo from "./Myinfo";
import { AuthContext } from "./Providers/AuthProvider";

 
const Mycollege = () => {
        const {user} = useContext(AuthContext)
        const [mycollege, setMycollege] = useState([]) 

                useEffect( () => {
                        fetch(`https://college-booking-server-alpha.vercel.app/addinfo?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => setMycollege(data))
                
                },[user?.email])
                

               
const handleDelete = id => { 
        Swal.fire({
                title: 'Are you sure?',
                text: "You won't be delete this?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
if (result.isConfirmed) {
        fetch(`https://college-booking-server-alpha.vercel.app/${id}`, {
                method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
        if(data.deletedCount > 0){

                Swal.fire(
                        'Deleted!',
                        'Your Information has been deleted.',
                        'success' 
                )
           const remaining = mycollege.filter(college => college._id !== id);  
           setMycollege(remaining)   
        }
       })
   }
}) 
}


        return (
                <div className="my-10">
                        <h1 className="text-2xl text-orange-300 text-center my-8 font-bold">My College : {mycollege.length} </h1>

                        <div className="overflow-x-auto w-full mb-16">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
         
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Date of birth</th>
        <th>Phone</th>
        <th>Subject</th>
        <th>Action</th>
         
      </tr>
    </thead>
    <tbody>
          
          {
                mycollege.map(mycollege => <Myinfo 
                        key={mycollege._id}
                        myinfo = {mycollege}
                        handleDelete = {handleDelete}
                > </Myinfo>
                  )
          }

    </tbody> 
  </table>
</div> 
                </div>
        );
};

export default Mycollege;