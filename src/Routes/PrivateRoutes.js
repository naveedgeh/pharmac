import {React, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
function PrivateRoute() {
    let [islogin,setIsLogin]=useState(true);
    if(!islogin){
        return <Navigate to="/"/>
    }
    return <Outlet/>
}
export default PrivateRoute;

