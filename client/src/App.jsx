import './App.css'
import Router from './routes/Router'
import { Provider } from "react-redux"
import store from './redux/store';

function App() {

  return (
    <>
    <Provider store={store}>
      <Router></Router>
    </Provider>
    </>
  )
}

export default App
