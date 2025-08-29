import './App.css'
import Router from './routes/Router'
import { Provider } from "react-redux"
import store from './redux/store';
import { SocketProvider } from './SocketProvider';
import PersistenceProvider from './PersistanceProvider';


function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
        <PersistenceProvider>
          <Router />
        </PersistenceProvider>
      </SocketProvider>
    </Provider>
  )
}

export default App