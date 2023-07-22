import Header from '../Components/Home/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';

const Main = () => {
        return (
                <div className=''>
                     <Header></Header> 
                     <Outlet></Outlet>
                     <Footer></Footer>  
                </div>
        );
};

export default Main;