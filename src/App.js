import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'
import LoginRouter from './routes/LoginRouter'

const App = () => {
    return (
        <div className="container">        
            <AppRouter />
        </div>
    )
}

export default App