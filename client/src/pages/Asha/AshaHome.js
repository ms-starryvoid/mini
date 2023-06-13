import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
//import '../styles/homepagestyle.css'
import { Button,Form } from 'antd';
const AshaHome = () => {
    const navigate= useNavigate()
    const [userData, setUserData] = useState(null);
    const onClickprofile =(name)=>{
      console.log(name)
    navigate(`/ashadetail/${encodeURIComponent(name)}`)
    }
    const OnclickNavViewAsha = () => {
        navigate("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
      const OnclickNav = () => {
        navigate("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
 const getUserData= async()=>{
    try {
        const res= await axios.post('http://localhost:8080/api/v1/user/getUserData',{},{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
        setUserData(res.data);
    } catch (error) {
        console.log(error)
    }
 }
 
 useEffect(() => {
    getUserData()
 },[])
 
 
    return (
        <section>
        <div className="circle"></div>
        <h2 className="heading1">Welcome back,{userData.name} </h2>
  
        <div className="container-short">
          <div className="rounded-rectangle">
            <div className="inside-button">
              <Button onClick={OnclickNav} className="inside-button">
                View patients
              </Button>
            </div>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Visit Schedules
            </Button>
          </div>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Stock Details
            </Button>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNavViewAsha} className="inside-button">
              Staff Details
            </Button>
          </div>
          <li onClick={onClickprofile(userData.name)}>profile</li>
        </div>
      </section>
  )
}

export default AshaHome