import React, { useEffect, useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

/**
 * ResolveAuthScreen.
 *
 * ResolveAuthScreen resolve current user authentification status.
 *
 * @param {object} props - Screen Props.
 *
 * @returns {React.ReactElement} - React element.
 */

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }), [];
    return null;
};

export default ResolveAuthScreen;