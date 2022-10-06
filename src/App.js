import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/pages/Header/Header';
import RouterScreen from './Router/RouterScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <RouterScreen/>
      </BrowserRouter>
    </div>
  );
}

export default App;
