import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import Swal from 'sweetalert2';

const Information = () => {
        const { user } = useContext(AuthContext);
        const handleadduser = (e) => {
                e.preventDefault();
                const form = e.target;
                const candidatename = form.name.value;
                const subject = form.subject.value;
                const phone = form.phone.value;
                const adress = form.adress.value;
                const dateofbirth = form.date.value;
                const image = form.image.value; 
                const email = form.email.value;
                 
            
                const userInfo = {
                  candidatename,
                  subject,
                  phone,
                  adress,
                  dateofbirth,
                  image, 
                  email, 
                };
                console.log(userInfo);
                fetch("https://college-booking-server-alpha.vercel.app/addinfo", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    if (result.insertedId) {
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Info added successfully!!",
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
                  <div className="w-full px-4 lg:px-8 lg:w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
                    <h1 className="text-3xl font-bold text-[#ff6899] mb-6">Add User Info</h1>
                    <form onSubmit={handleadduser}>
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        /> 
                        <input
                          type="number"
                          placeholder="Phone"
                          name="phone"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
                        
                        <input
                          type="text"
                          placeholder="Adress"
                          name="adress"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
                         
                        <input 
                          type="date"
                          placeholder="date of birth"
                          name="date"
                          className="border py-2 px-4 rounded-md w-full"
                        />
                        <input
                          type="text"
                          placeholder="Image URL"
                          name="image"
                          className="border py-2 px-4 rounded-md w-full"
                        />
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          defaultValue={user && user.email}
                          className="border py-2 px-4 rounded-md w-full"
                         
                        />
                      </div> 
                      <input
                        type="submit"
                        className="btn hover:bg-[#d2c77f] hover:border-[#2EBFED] border-[#47a1ea] bg-[#7f72de] mt-5 w-full"
                        value="Add Info"
                      />
                    </form>
                  </div>
                </div>
              );
};

export default Information;