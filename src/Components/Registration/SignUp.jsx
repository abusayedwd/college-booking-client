import { Link,useNavigate } from 'react-router-dom';
import img from '../../../public/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
 


const Signup = () => {
        const {createUser,userUpdate} = useContext(AuthContext)
        const [success, setSuccess] = useState('')
        const [error, setError] = useState('')

        const navigate = useNavigate()
        const handleSignUp = event => {
                event.preventDefault();

                const form = event.target;
                const name = form.name.value;
                const email = form.email.value;
                const password = form.password.value;
                const photo = form.photo.value;

                console.log(name, email, password,photo)
                 const data = {
                  displayName: name, photoURL: photo
                 }

                createUser(email, password)
                 .then(result => {
                        const creatUser = result.user;
                        console.log(creatUser)
                        setSuccess('signup success !!')
                        userUpdate(data)

                        setError('')
                        navigate('/')
                 })
                 .catch(error => {
                //       const errore =  (error.message);
                console.log(error) 
                        setError(' Password should be at least 6 characters')
                        
                 })

        }


        return (
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <div className=" w-1/2 mr-6">
                     <img src= {img} alt="" />
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleSignUp} >
                 <div className="card-body">
                        <h1 className='text-3xl text-blue-300 font-bold'>Sign Up</h1>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" /> 
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" /> 
                      </div>
                  <p>{error}</p>
                  <p>{success}</p>
                   

                      <div className="form-control mt-6">
                       
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                 <p className='text-center my-4'>Already have an account ? <Link className='text-orange-500 text-xl font-bold' to = '/login'>Login</Link></p>
                      </div>
                    </div>
                 </form>
                  </div>
                </div>
              </div>
        );
};

export default Signup;