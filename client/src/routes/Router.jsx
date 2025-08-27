import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby/Lobby';
import Dashboard from './../pages/Dashboard/Dashboard';
import Voting from '../pages/Voting/Voting';
import QR from '../pages/QR/QR';
import Territory from '../pages/Territory/Territory';

const RouterWatcher = () => {
  const navigate = useNavigate();
  const redirectToVoting = useSelector((state) => state.voting.votingStatus); 

  useEffect(() => {
    if (redirectToVoting === true) {
      navigate('/voting');
    }
  }, [redirectToVoting, navigate]);

  return null; 
};


const Router = () => {
    return (
        <BrowserRouter>
            <RouterWatcher />
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path='/voting' element={<Voting/>}/>
                <Route path='/qr' element={<QR></QR>}></Route>
                <Route path='/territory' element={<Territory></Territory>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;