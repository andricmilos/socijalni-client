import React from 'react';
import { Outlet } from 'react-router-dom';
import validateLogin from '../LoginValidate';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    if (location.pathname != '/login') {
        validateLogin();
    }
    return (<>
        <Outlet />
    </>);
}

export default Layout;