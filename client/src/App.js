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
import Viewasha from './pages/admin/Viewasha';
import Ashadetail from './pages/admin/Ashadetail';
import PatientHome from './pages/Patient/PatientHome';
import Plogin from './pages/Patient/Plogin';
import Addpatient from './pages/admin/Addpatient';
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
    <Route path='/adminhome' element =/*{<ProtectedRoutes>*/
      {<AdminHome/>}/>
   
    <Route path='/ashalogin' element = {<Ashalogin/>}/>
    <Route path='/ashahome' element ={<Asha_Home/>}/>
    <Route path='/patienthome' element ={<PatientHome/>}/>
    <Route path='/patientlogin' element ={<Plogin/>}/>
    <Route path='/viewasha' element ={<Viewasha/>}/>
    <Route path='/ashadetail/:name' element ={<Ashadetail/>}/>
    <Route path='/adminprofile/:name' element ={<Plogin/>}/>
    <Route path='/ashaprofile/:name' element ={<Plogin/>}/>
    <Route path='/patientprofile/:name' element ={<Plogin/>}/>
    <Route path='/Addpatient' element ={<Addpatient/>}/>

    </Routes>
   </Router>
   
   </>
 
  );
}

export default App;
