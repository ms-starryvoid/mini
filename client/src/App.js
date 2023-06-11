import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/login'
import Signup from './pages/signup'
import Asha_Home from './pages/Asha/AshaHome';
import AdminHome from './pages/AdminHome';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import Ashalogin from './pages/Asha/Ashalogin';
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
   
   <>
   <Router>
    {loading && <Spinner/>}
   <Routes> 
    <Route  path='/' element= 
    {<Homepage/>}
    ></Route>
    <Route  path='/login' element= { <PublicRoutes>
      {<Login/>}
    </PublicRoutes>}></Route>
    <Route path='/signup' element= {
      <PublicRoutes>
        {<Signup/>}
      </PublicRoutes>
    }></Route>
    <Route path='/login/adminhome' element ={<ProtectedRoutes>
      {<AdminHome/>}
    </ProtectedRoutes>}/>
    <Route path='/ashalogin' element = {<Ashalogin/>}/>
    <Route path='/ashahome' element =
      {<Asha_Home/>}
    />
    
    </Routes>
   </Router>
   
   </>
 
  );
}

export default App;
