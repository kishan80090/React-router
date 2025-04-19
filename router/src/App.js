 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Facebook1 from './components/Facebook1';
import Datastore1 from './components/Datastore1';
import LoginBook from './components/LoginBook';
function App() {
  return (
    <div className='App' > 
      <Router>
    <Routes>
    <Route path="/" element={<Datastore1/>}/>
     <Route path='/facebook' element={<Facebook1/>}/> 
    <Route path="/login" element={<LoginBook/>}/>
      
    </Routes>
  </Router>
  </div>

  );
}
export default App;
