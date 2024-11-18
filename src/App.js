import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './paginas/Login'; 
import Home from './paginas/Home';   
import './App.css';

function RotaProtegida({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
}

function App() {
    function logout() {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/home" 
                        element={
                            <RotaProtegida>
                                <Home />
                                <button onClick={logout}>Sair</button>
                            </RotaProtegida>
                        } 
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

