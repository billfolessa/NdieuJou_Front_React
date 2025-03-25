import { useContext } from "react"
import { AuthContext } from "../store/authStore"
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login";

const PrivateRoute:React.FC =()=>{
    const {jwt} = useContext(AuthContext)
    return jwt ? <Outlet/> : <Navigate to="/login"/>
}
export default PrivateRoute;