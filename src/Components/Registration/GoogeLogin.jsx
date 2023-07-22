import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle, } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
 

const  GoogleLogin = () => {
        const {googleSignIn} = useContext(AuthContext)
          
        const location = useLocation()
      const navigate = useNavigate();

      const from = location.state?.from?.pathname || '/';

        const Logingoogle = () => {
                googleSignIn()
                .then( () => {
                 navigate(from)
                })
                .catch(error => console.log(error))
        }
        return (
                <div>
                          <div className="divider">OR</div>
                          <div className='text-center'>
                          <button onClick={Logingoogle} className="btn btn-outline btn-success"><FaGoogle className='mr-2'></FaGoogle>
                           Login with google</button>
                           
                          </div>
                </div>
        );
};

export default  GoogleLogin;