import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { authTypes } from '../types/authTypes';

const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    
    const handleLogin = () => {
        dispatch({ type: authTypes.login });
        history.push("/men");
    }

    return (
        <div className="container mt-5 text-center">
            <img src="/assets/animate.gif" alt="Animate gif" />
            <h1 className="my-3">Login Screen</h1>
            <button className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen