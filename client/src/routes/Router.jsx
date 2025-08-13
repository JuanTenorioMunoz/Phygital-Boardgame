import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby/Lobby';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lobby/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;