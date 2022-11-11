import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Codinglogin from './components/coding_login';
import Codingregister from './components/coding_register';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={<Codingregister/>}/>
    <Route path='/signin' element={<Codinglogin/>}/>
    
  </Routes>
  </BrowserRouter>



  </>
  );
}

export default App;
