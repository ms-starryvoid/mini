import React from 'react';
import "./Delete.css";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Delete() {
    const navigate = useNavigate();
  const OnclickNav = () => {navigate("/login");}
  const Cancelbutton = () => {navigate("/viewpatientprf");}
  const Closebutton = () => {navigate("/viewpatientprf");}


  return (
    <div className='deletepopup'>
      <div className='popup'>
        <div className='head'>
          <Button onClick={Closebutton} className="close">X</Button>      
        </div>
        <div className='mid'>
          <p className='doyou'>Do you want to delete the patient?</p>
          <p className='confirm'>Are you sure that you want to permanently delete this patient? Once done it cannot be undone. </p>
        </div>
        <div className='foot'>
          <Button onClick={Cancelbutton} className="cancel">Cancel</Button>
          <Button onClick={OnclickNav} className="delete">Delete</Button>
        </div>
      </div>
    </div> 

  );
}

export default Delete
