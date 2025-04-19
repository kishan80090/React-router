 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Facebook from './components/Facebook';
// import Datastore from './components/Datastore';
import LoginBook from './components/LoginBook';
function App() {
  return (
    <div className='App' > 
      <Router>
    <Routes>
    {/* <Route path="/" element={<Datastore/>}/> */}
    {/* <Route path='/facebook' element={<Facebook/>}/> */}
    <Route path="/" element={<LoginBook/>}/>
      
    </Routes>
  </Router>
  </div>

  );
}
export default App;
