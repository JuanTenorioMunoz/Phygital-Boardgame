import './App.css'
import Router from './routes/Router'
import { Provider } from "react-redux"
import store from './redux/store';
import { SocketProvider } from './socketProvider';

function App() {

  return (
    <>

    <Provider store={store}>
      <SocketProvider>
        <Router></Router>
      </SocketProvider>
    </Provider>
    </>
  )
}

export default App
