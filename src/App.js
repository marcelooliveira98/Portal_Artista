import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pagínas/login';
import ProtectedComponent from './components/ProtectedComponent'; 

function RotaProtegida({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/rota-protegida" element={<RotaProtegida><ProtectedComponent /></RotaProtegida>} />
            </Routes>
        </Router>
    );
}

export default App;
