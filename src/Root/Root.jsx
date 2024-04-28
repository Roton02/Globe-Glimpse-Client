
import {Outlet, useNavigation} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../Shared/Navber/Navbar';
import Footer from '../Shared/Navber/Footer/Footer';
AOS.init();

const Root = () => {
    const navigation  = useNavigation()
    console.log(navigation);
    
    return (
        <div className="py-1 max-w-7xl  px-3 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* bg-gradient-to-b from-slate-200 via-red-50 to-green-100 */}
        </div>
    );
};

export default Root;