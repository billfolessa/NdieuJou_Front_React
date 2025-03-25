import { BrowserRouter , Route, Routes } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"
import DashBord from "../pages/dashbord"
import PrivateRoute from "./privateRoute"


const RouteApp :React.FC= ()=>{

    return (
        <BrowserRouter>
          <Routes>
                <Route path="/login" Component={Login}/>
                <Route path="/register" Component={Register}/>
                <Route path="" Component={PrivateRoute}>
                    <Route path="" Component={DashBord}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;