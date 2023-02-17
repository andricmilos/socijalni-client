import React from 'react';
import { Outlet } from 'react-router-dom';
import validateLogin from '../LoginValidate';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    var provera = true
    if (location.pathname == '/SignUp') {
        provera = false
    }
    if (location.pathname == '/') {
        provera = false
    }
    if (location.pathname == '/logout') {
        provera = false
    }
    if (location.pathname != '/login' && provera) {
        validateLogin();
    }
    return (<>
        <Outlet />
    </>);
}

export default Layout;