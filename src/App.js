import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/pages/navbar/Navbar';

import './App.css';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
