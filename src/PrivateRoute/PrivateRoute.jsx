import PropTypes from 'prop-types';
import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import lottie from '../assets/Lottie.json'
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <div className="flex min-h-screen my-auto items-center justify-center">
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: '300px', width: '300px' }}
        />
      </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes ={
    children:PropTypes.node.isRequired
}
export default PrivateRoute;