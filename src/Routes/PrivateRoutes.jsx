import { useContext } from "react";
import { AuthContext } from "../component/providers/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    console.log(user);
    if(loading){
        return <div>
        <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
        </div>;
    }

    if(user){
        return children;
    } 


    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes; 
PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };