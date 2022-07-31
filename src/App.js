import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';import './App.css';
import Electronics from './component/Electronics';
import Fashion from './component/Fashion';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electronics" element={<Electronics/>} />
      <Route path="/fashion" element={<Fashion />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
