import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-[#f5f5f7]">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
