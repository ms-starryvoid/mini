import React from 'react';
import "./Viewpatientprf.css";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const Viewpatientprf = () => {
  const navigate = useNavigate();
  const OnclickNav = () => {navigate("/delete");}
  const Visitbutton = () => {navigate("/delete");}
  const Viewreportbutton = () => {navigate("/viewreport");}
  const Uploadreportbutton = () => {navigate("/delete");}
  const Stockbutton = () => {navigate("/delete");}
  const Viewprfbutton = () => {navigate("/delete");}

  return (
    <section>
    <h2 className="Name">Name</h2>

    <div className='circle1'></div>
    <div className='circle2'></div>
    <div className='circle3'></div>

    <div class="vertical-line"></div>

    <div className='rect'>

    <div className='details'>
        <p className='name'>Name</p>
        <p className='age'>Age</p>
        <p className='gender'>Gender</p>
        <p className='address'>Address</p>
        <p className='email'>Email</p>
        <p className='phno'>Phone no.</p>
        <p className='ward'>Ward no.</p>
        <p className='asha'>Asha</p>
    </div>

    <div className='semicolon'>
    <p className='ns'>:</p>
        <p className='as'>:</p>
        <p className='gs'>:</p>
        <p className='ads'>:</p>
        <p className='es'>:</p>
        <p className='ps'>:</p>
        <p className='ws'>:</p>
        <p className='ass'>:</p>
    </div>
    
    <div className='info'>
    <p className='namee'>Edna</p>
        <p className='agee'>41</p>
        <p className='genderr'>Female</p>
        <p className='addresss'>Meenadam,Kottayam</p>
        <p className='emails'>edna@gmail.com</p>
        <p className='ph'>9876543221</p>
        <p className='ward'>12</p>
        <p className='ashaa'>Dona Johnson</p>
    </div>

    <Button onClick={OnclickNav} className="deletebutton">Delete patient</Button>      

        <div class="rectangle1">
          <Button onClick={Visitbutton} className="visit">Visit schedules</Button> 
         </div>
        <div class="rectangle2">
          <Button onClick={Viewreportbutton} className="vreports">View reports</Button>
        </div>
        <div class="rectangle3">
          <Button onClick={Uploadreportbutton} className="ureports">Upload reports</Button>  
         </div>
        <div class="rectangle4">
          <Button onClick={Stockbutton} className="stock">Stock requirements</Button>        
        </div>
    </div>

    <Button onClick={Viewprfbutton} className="view">View profile</Button>  
    <div className='circle'></div>

    </section>

  );
}

export default Viewpatientprf
