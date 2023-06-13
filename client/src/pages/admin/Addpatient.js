import axios from 'axios';
import React from 'react'
import './Addpatient.css'
import {PlusOutlined} from '@ant-design/icons' 
import { Button, Space } from 'antd';

import {
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Addpatient = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const Onfinishf =async (values)=>{
      try {
        const response = await axios.post('',values)
      } catch (error) {
        console.log("error")
      }
      
    }
   
  return (
    <div className='asd'>
        <h1>Add Patient</h1> 
        
        <Form
    
    
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 1000,
        }}
           onFinish={Onfinishf} >
       <fieldset>
       <div className="rounded-rectangle">
         <div className="left-content">
           
           <p>
             <Form.Item label="Name">
               <Input />
             </Form.Item>
             <Form.Item label="Age">
               <DatePicker />
             </Form.Item>
             <Form.Item label="Gender">
               <Select>
                 <Select.Option value="demo">Demo</Select.Option>
               </Select>
             </Form.Item>
             <Form.Item label="Address">
               <Input />
             </Form.Item>
             <Form.Item label="Phone">
               <Input />
             </Form.Item>
             <Form.Item label="Email">
               <Input />
             </Form.Item>
           </p>
           
        </div>
       
        <div className="right-content">
          
          <p>
            <Form.Item label="Patient ID">
              <Input />
            </Form.Item>
            <Form.Item label="Visit Date">
              <Input />
            </Form.Item>
            <Form.Item label="Ward number">
              <Input />
            </Form.Item>
            <Form.Item label="Asha Worker">
              <Input />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                    <div
                      style={{
                      marginTop: 8,
                    }}
                    >
                    Upload
                   </div>
                </div>
              </Upload>
            </Form.Item>
          </p>
        </div>
    </div>
       
    
    </fieldset>
    
      </Form>
     {/* button = () => (
  <div className="button" style={{ justifyContent: 'center', alignItems: 'center'}} >
    <Space wrap>
      <Button variant="outlined" >Register</Button>
    </Space>
  </div>
);  */}

<div class="button">
  <div class="center-button">
    <button class="center-button">Register</button>
  </div>
</div>

    </div>
  )
}

export default Addpatient
