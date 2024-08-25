
import {Outlet, useNavigation} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../Shared/Navber/Navbar';
import { Footer } from '../Shared/Navber/Footer/Footer';
AOS.init();

const Root = () => {
    const navigation  = useNavigation()
    console.log(navigation);
    
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-117px)] py-1 max-w-7xl overflow-x-hidden   mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* bg-gradient-to-b from-slate-200 via-red-50 to-green-100 */}
        </div>
    );
};

export default Root;