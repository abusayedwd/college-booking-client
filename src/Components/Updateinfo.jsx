import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 
const Updateinfo = () => {
        const updatainfo = useLoaderData();
        
        
        const { candidatename,email, dateofbirth,  phone, subject, _id} = updatainfo;

        const handleUpdateInfo = (e) => {
                e.preventDefault();
                const form = e.target;
                const candidatename = form.candidatename.value;
                const dateofbirth = form.dateofbirth.value;
                const phone = form.phone.value;
                const subject = form.subject.value;
            
                const  updateinfo = {
                  candidatename,
                  dateofbirth,
                  phone,
                  subject,
                  
                };
               
                fetch(`https://college-booking-server-alpha.vercel.app/addinfo/${_id}`, {
                  method: "put",
                  headers: {
                    "content-type": "application/json",
                  },
                  body:JSON.stringify(updateinfo),
                })
                  .then((res) => res.json())
                  .then((result) => {
                       
                    if (result.modifiedCount) {
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Info Update successfully!!",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      form.reset();
                    } else {
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Ops!! There is an error. Try again",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  });
              };
              return (
                <div>
                  <div className="w-full px-4 lg:px-8 lg:w-2/3 bg-sky-100 mx-auto p-10 rounded-lg my-6 ">
                    <h1 className="text-3xl font-bold text-[#ff6899] mb-6">Update Info : {email}</h1>
                    <form onSubmit={handleUpdateInfo}>
                      <div >
                         
                      <label className="label">
                 <span className="label-text">Name:</span>
                    </label>
                        <input
                        defaultValue={candidatename}
                          type="text" 
                          name="candidatename"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />

               <label className="label">
                 <span className="label-text">Phone:</span>
               </label>
                        <input
                         defaultValue={phone}
                          type="number"
                          placeholder="phone"
                          name="phone"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
               <label className="label">
                 <span className="label-text">date of birth:</span>
               </label>
                        <input
                         defaultValue={dateofbirth}
                          type="date"
                          placeholder="date of birth"
                          name="dateofbirth"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
               <label className="label">
                 <span className="label-text">Subject:</span>
               </label>
                        <input
                         defaultValue={subject}
                          type="text"
                          placeholder="subject"
                          name="subject"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
                         
                      </div> 
                      <input
                        type="submit"
                        className="btn hover:bg-orange-300 hover:border-[#2EBFED] border-[#ff6899] bg-blue-400 w-full"
                        value="Update Toy"
                      />
                    </form>
                  </div>
                </div>
              );
};

export default Updateinfo;