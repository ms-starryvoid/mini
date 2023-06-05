import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/login'
import Signup from './pages/signup'
function App() {
  return (
   
   <>
   <Router>
   <Routes>
    <Route  path='/' element= {<Homepage/>}></Route>
    <Route  path='/login' element= {<Login/>}></Route>
    <Route path='/signup' element= {<Signup/>}></Route>
   </Routes>
   </Router>
   
   </>
 
  );
}

export default App;
