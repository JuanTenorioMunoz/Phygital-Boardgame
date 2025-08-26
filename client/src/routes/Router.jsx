import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby/Lobby';
import Dashboard from './../pages/Dashboard/Dashboard';
import Voting from '../pages/Voting/Voting';
import QR from '../pages/QR/QR';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path='/voting' element={<Voting/>}/>
                <Route path='/qr' element={<QR></QR>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;