
import React from 'react';
import {Button, Form, message, Select} from 'antd';
import {getDepartments, resolveAllegation} from "../../../../axios/allegations";
import {assignUser, getSingleUser} from "../../../../axios/users";
import {enums as allegationStatusEnums} from '../../../../enums/AllegationStatus';

function Actions(props) {
  const [form] = Form.useForm();
  const [departments, setDepartments] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [reassignActionActive, setReassignActionActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getDepartments()
      .then(response => {
        if (response.status) {
          setDepartments(response.data);
        }
      })
  }, []);

  function getUsers(departmentId) {
    getSingleUser({departmentId}, {offset: 0, limit: 100})
      .then(response => {
        if (response.status) {
          setUsers(response.data);
        }
      })
  }

  function onSubmit(values) {
    assignUser(values.user, props.allegationId)
      .then(response => {
        if (response.status) {
          message.success('Allegation was successfully reassigned');
          props.setShowAllegation(false);
        } else {
          message.error(response.msg)
        }
      })
      .catch(error => {
        message.error(error.response.msg)
      });
  }

  function resolve() {
    resolveAllegation(props.allegationId, allegationStatusEnums.RESOLVED)
      .then(response => {
        message.success('Allegation was resolved');
        props.setShowAllegation(false);
      })
      .catch(error => error)
      .finally(() => {
        setIsLoading(false);
      })
  }


  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
    },
    wrapperCol: {
      xs: {span: 24},
    },
  };

  return (
    <>
      <Button style={{width: '100%', marginTop: 10}} type="primary" onClick={() => {
        setIsLoading(true);
        resolve();
      }} disabled={isLoading}>Resolve Allegation</Button>
      <Button style={{width: '100%', marginTop: 10}} type="primary" onClick={() => {
        setReassignActionActive(!reassignActionActive);
      }} disabled={isLoading}>Assign To User</Button>
      {reassignActionActive ? <Form form={form}
                                    onFinish={onSubmit}>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="department"
          label={'Department'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Select onChange={e => getUsers(e)}>
            {departments.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="user"
          label={'User'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]}
        >
          <Select>
            {users.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Assign
          </Button>
        </Form.Item>
      </Form> : null}
    </>
  )
}

export default Actions;
