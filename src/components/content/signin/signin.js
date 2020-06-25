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
      window.location.href = '/allegations';
    }
  }, [history]);
  const onFinish = values => {
    signIn(values)
      .then(response => {
        if(response.token) {
          localStorage.setItem('idToken', response.token);
          //history.push('/allegations');
          window.location.href = '/allegations';
        }
      })
  };

  return (
    <div className={'signin pwc-forms'}>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          className={'pwc-forms__field pwc-forms__field--text form-group'}
        >
          <Input className={'form-control'} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className={'pwc-forms__field pwc-forms__field--text form-group'}
        >
          <Input.Password className={'form-control'} />
        </Form.Item>
        <Form.Item style={{textAlign: 'center'}}>
          <button type={'submit'} className={'btn btn--primary btn--transparent'}>Sign In</button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignIn;
