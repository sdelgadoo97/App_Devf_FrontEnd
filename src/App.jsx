import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/';
import Header from './components/Header/';
import RoutesIndex from './router/RoutesIndex';

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
