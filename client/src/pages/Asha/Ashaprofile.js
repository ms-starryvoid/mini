import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../../components/api';

const Ashaprofile= () => {
  
  const [workerDetails, setprofileDetails] = useState(JSON.parse(localStorage.getItem('userData')) ||null);
  ;
 
  
    
    
  const fetchprofileDetails = async () => {
    try {
      const encodedName = encodeURIComponent(localStorage.userData.uid);
      const response = await api.post(`/api/v1/user/ashadetail/${encodedName}`);
      setprofileDetails(response.data);
      
    } catch (error) {
      console.error('Error not posted:', error);
    }
  };
  useEffect(() => {
    fetchprofileDetails();
  }, []);

  if (!workerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3 className='option'>Worker Details</h3>
      <p  className='option'>Name: {workerDetails.name}</p>
      <p className='option'>Age: {workerDetails.age}</p>
      <p className='option'>Email: {workerDetails.email}</p>
      <p className='option'>Asha_id: {workerDetails.uid}</p>
      {/* Display other worker details */}
    </div>
  );
};

export default Ashaprofile;
