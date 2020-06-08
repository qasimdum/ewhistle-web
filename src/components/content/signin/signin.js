import React, {useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import './signin.css';
import {signIn} from '../../../axios/signin';
import {useHistory} from 'react-router-dom';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function SignIn() {
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('idToken')) {
      history.push('./allegations')
    }
  }, [history]);
  const onFinish = values => {
    signIn(values)
      .then(response => {
        if(response.token) {
          localStorage.setItem('idToken', response.token);
          history.push('/allegations');
        }
      })
  };

  return (
    <div className={'signin'}>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignIn;
