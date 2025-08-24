import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby/Lobby';
import Dashboard from './../pages/Dashboard/Dashboard';
import Voting from '../pages/Voting/Voting';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path='/voting' element={<Voting/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;