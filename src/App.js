import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './contexts/AuthContext';
import { AuthReducer } from './reducers/AuthReducer'
import AppRouter from './routes/AppRouter'

const App = () => {

    const init = () => JSON.parse(localStorage.getItem("log")) || { log: false };

    const [log, dispatch] = useReducer(AuthReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("log", JSON.stringify(log));
    }, [log]);


    return (
        <div className="container">
            <AuthContext.Provider value={{ log, dispatch }}>
                <AppRouter />
            </AuthContext.Provider>
        </div>
    )
}

export default App