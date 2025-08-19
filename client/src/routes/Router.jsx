import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby/Lobby';
import Dashboard from './../pages/Dashboard/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;