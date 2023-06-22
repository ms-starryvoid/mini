'use client'
import api from '@/api';
import { Button, Form, Input, Select, message } from 'antd';
import React from 'react';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



const page = () => {
  const onFinish=async(values)=>{
    console.log(values)
    try {
      const res = await api.post('/api/v1/user/visitdetail',values)
      console.log(res.data)

    } catch (error) {
      console.log(error)
      message.error('some thing went wrong')
    }
    
  
  }
  const onReset = () => {
    Form.resetFields();
  };
  return (
    <Form
    {...layout}
    
    name="control-hooks"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item name="year" label="year" rules={[{ required: true }]}>
      
     <Input />
    </Form.Item>
    <Form.Item name="month" label="month " rules={[{ required: true }]}>
     
    <Select
        placeholder="Select a option and change input text above"
        
        allowClear
      >
        <Option value="01">January</Option>
        <Option value="02">frbruary</Option>
        <Option value="03">march</Option>
        <Option value="04">April</Option>
<Option value="05">May</Option>
<Option value="06">June</Option>
<Option value="07">July</Option>
<Option value="08">August</Option>
<Option value="09">September</Option>
<Option value="10">October</Option>
<Option value="11">November</Option>
<Option value="12">December</Option>
      </Select>
    </Form.Item>
    
    <Form.Item {...tailLayout}>
      <button type="submit">
        Submit
      </button>
      <Button htmlType="button" onClick={onReset}>
        Reset
      </Button>
     
    </Form.Item>
  </Form>
);
}

export default page