import React from 'react';
import {Button, Form, Input, message, Select} from "antd";
import roles from "../../../../enums/Roles";
import userStatuses from "../../../../enums/UserStatus";
import {getDepartments} from "../../../../axios/allegations";
import {createUser, resetPassword, saveUser} from "../../../../axios/users";

function UserDetails(props) {
  const [form] = Form.useForm();
  const [departments, setDepartments] = React.useState([]);
  React.useEffect(() => {
    if(props.user) {
      let user = {...props.user};
      for(let k in user) {
        if(user[k] !== null) {
          if(k === 'departmentId') continue;
          user[k] = user[k].toString();
        }
      }
      form.setFieldsValue(user);
    }else{
      form.setFieldsValue({email: '', name: '', username: '', role: '', departmentId: '', active: ''});
    }

    getDepartments()
      .then(response => {
        setDepartments(response.data);
      })
      .catch(e => e)
  }, [form, props.user]);
  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
    },
    wrapperCol: {
      xs: {span: 24},
    },
  };

  function onSubmit(values) {
    if(props.user) {
      saveUser({...values, userId: props.user.id})
        .then(response => {
          if (response.status) {
            message.success('User was saved');
            props.setShowUser(false);
            props.searchData();
          } else {
            message.error(response.msg)
          }
        })
        .catch(error => {
          message.error(error.response.msg)
        });
    }else{
      createUser({...values})
        .then(response => {
          if (response.status) {
            message.success('User was created');
            props.setShowUser(false);
            props.searchData();
          } else {
            message.error(response.msg)
          }
        })
        .catch(error => {
          message.error(error.response.msg)
        });
    }
  }
  function resetUserPassword() {
    resetPassword({userId: props.user.id})
      .then(response => {
        if(response.status) {
          message.success('User was created');
          props.setShowUser(false);
        }
      })
  }

  return (
    <>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="email"
          label={'Email'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
            {
              type: "email",
              message: 'Please provide valid email address',
            },
          ]}
        >
          <Input type={'email'}/>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="name"
          label={'Name'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="username"
          label={'Username'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="role"
          label={'Role'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Select allowClear>
            {roles.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="departmentId"
          label={'Department'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Select allowClear>
            {departments.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="active"
          label={'Status'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Select allowClear>
            {userStatuses.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button style={{marginRight: 15}} onClick={() => props.setShowUser(false)}>
            Close
          </Button>
          <Button style={{marginRight: 15}} type={'primary'} htmlType={'submit'}>
            Save
          </Button>
          <Button style={{marginRight: 15}} onClick={resetUserPassword}>
            Reset Password
          </Button>
        </Form.Item>
      </Form>
      </>
  )
}

export default UserDetails;
