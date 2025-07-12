import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Facebook1 from './components/Facebook1';
import './App.css';
import LoginBook from './components/LoginBook';
import Facecom from './components/Facecom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facebook1 />} />
        <Route path="/login" element={<LoginBook/>}/>
        {/* <route path="/com" element={<Facecom/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
