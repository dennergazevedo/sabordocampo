import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';
import { useSelector } from 'react-redux';
export default function RouteWrapper({
    component: Component,
    isPrivate,
    Login,
    Admin,
    ...rest
}) {

    const { signed } = store.getState().auth;
    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux || '');

    if(!signed && isPrivate){
        return <Redirect to="/login"/>
    }

    if(signed && Login){
        return <Redirect to="/"/>
    }

    if(profile.provider !== 143 && Admin){
        return <Redirect to="/"/>
    }

    return <Route {...rest} component={Component}/>
}

RouteWrapper.propTypes={
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
    Cad: false,
};