import React from 'react';
import {Button, Form, Input, Select, Radio, DatePicker, Upload, message} from "antd";
import './report-allegation.css';
import entities from '../../../enums/Entities';
import booleans, {enums as booleanEnums} from '../../../enums/Boolean';
import allegationNatures, {enums as allegationNatureEnums} from '../../../enums/AllegationNature';
import allegationOccurrences from '../../../enums/AllegationOccurrence';
import countries from '../../../enums/Country';
import jobPositions from '../../../enums/JobPosition';
import {UploadOutlined} from '@ant-design/icons';
import AllegationNature from "./allegation-nature/allegation-nature";
import {saveAllegation} from '../../../axios/allegations';
import {uploadFile} from "../../../axios/allegations";
import {useHistory} from 'react-router-dom';

function ReportAllegation() {

  const [form] = Form.useForm();
  const [showAlreadyReported, setShowAlreadyReported] = React.useState(false);
  const [showAdditionalInformation, setShowAdditionalInformation] = React.useState(false);
  const [showEvidence, setShowEvidence] = React.useState(false);
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const [showAllegationNature1, setShowAllegationNature1] = React.useState(false);
  const [showAllegationNature2, setShowAllegationNature2] = React.useState(false);
  const [showAllegationNature3, setShowAllegationNature3] = React.useState(false);

  const [file, setFile] = React.useState(null);

  const history = useHistory();

  function onSubmit(values) {
    saveAllegation(values)
      .then(response => {
        if(response.status) {
          if(file) {
            uploadAllegationFile(file, response.data)
          }
          if(response.trackingId) {
            localStorage.setItem('trackingId', response.trackingId);
            history.push('/allegation_submit');
          }
          message.success('Allegation was saved successfully');
        }else{
          message.error(response.msg)
        }
      })
      .catch(error => {
        message.error(error.response.msg)
      });
  }

  function uploadAllegationFile(file, allegationId) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('allegationId', allegationId);

    uploadFile(formData)
      .then(response => {
        if(response.status) {
          message.success('File was uploaded successfully');
        }
      })
  }

  function onFinishFailed(er) {
    console.error(er)

  }

  function allegationNatureChange(v) {
    v = parseInt(v);
    if(v === allegationNatureEnums.ACTUAL_FRAUD || v === allegationNatureEnums.SUSPECTED_FRAUD) {
      setShowAllegationNature1(true);
      setShowAllegationNature2(false);
      setShowAllegationNature3(false);
    }else {
      if(v === allegationNatureEnums.ACTUAL_MISCONDUCT || v === allegationNatureEnums.SUSPECTED_MISCONDUCT) {
        setShowAllegationNature1(false);
        setShowAllegationNature2(true);
        setShowAllegationNature3(false);
      }else{
        if(v === allegationNatureEnums.POTENTIAL_HSE_INCIDENT || v === allegationNatureEnums.ACTUAL_HSE_INCIDENT) {
          setShowAllegationNature1(false);
          setShowAllegationNature2(false);
          setShowAllegationNature3(true);
        }
      }
    }
  }

  const initialValues = {
    radioAlreadySubmitted: showAlreadyReported ? booleanEnums.YES.toString() : booleanEnums.NO.toString(),
    radioAdditionalInformation: showAdditionalInformation ? booleanEnums.YES.toString() : booleanEnums.NO.toString(),
    radioEvidence: showEvidence ? booleanEnums.YES.toString() : booleanEnums.NO.toString(),
    radioContactInformation: showContactInfo ? booleanEnums.YES.toString() : booleanEnums.NO.toString(),
  };

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
    },
    wrapperCol: {
      xs: {span: 24},
    },
  };

  return (
    <div className={'report-allegation'}>
      <Form
        initialValues={initialValues}
        form={form}
        name="normal_login"
        className="allegation-form"
        onFinishFailed={onFinishFailed}
        onFinish={onSubmit}
      >
        <Form.Item
          {...formItemLayout}
          name="entity"
          labelAlign={"left"}
          label={'Name of Entity/Branch'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {entities.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="country"
          label={'Location of allegation'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {countries.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="jobPosition"
          label={'I am'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {jobPositions.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="allegationNature"
          label={'Nature of allegation being reported'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select onChange={allegationNatureChange}>
            {allegationNatures.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
        <AllegationNature show={{showAllegationNature1, showAllegationNature2, showAllegationNature3}} />
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="allegationOccurrence"
          label={'Choose when allegation took place'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Radio.Group>
            {allegationOccurrences.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
          </Radio.Group>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="allegationDate"
          label={'Date of actual allegation'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <DatePicker format={'DD/MM/YYYY'}/>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="radioAlreadySubmitted"
          label={'Has this allegation been reported before?'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Radio.Group onChange={(e) => setShowAlreadyReported(parseInt(e.target.value) === booleanEnums.YES)}>
            {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
            <Radio key={"2"} value={"2"}>Don't know</Radio>
          </Radio.Group>
        </Form.Item>
        {showAlreadyReported ? <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="previousReportText"
          label={'Provide more details when, to who and how the allegation was reported internally'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Input.TextArea/>
        </Form.Item> : null}
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="radioAdditionalInformation"
          label={'Would you like to provide additional information to support this allegation?'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Radio.Group onChange={(e) => setShowAdditionalInformation(parseInt(e.target.value) === booleanEnums.YES)}>
            {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
          </Radio.Group>
        </Form.Item>
        {showAdditionalInformation ? <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="additionalInformationText"
          label={'Use the space below to share additional information such as what evidence (document or email report) and share any suggestions on how this can be prevented'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Input.TextArea/>
        </Form.Item> : null}
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="radioEvidence"
          label={'Would you like to attach evidences for this allegation?'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Radio.Group onChange={(e) => setShowEvidence(parseInt(e.target.value) === booleanEnums.YES)}>
            {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
          </Radio.Group>
        </Form.Item>
        {showEvidence ? <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="evidence"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
          label={'Attach evidence'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Upload defaultFileList={[]} beforeUpload={(e) => {
            setFile(e); return false;
          }}>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item> : null}
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          name="radioContactInformation"
          label={'Would you like to disclose your contact information?'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Radio.Group onChange={(e) => setShowContactInfo(parseInt(e.target.value) === booleanEnums.YES)}>
            {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
          </Radio.Group>
        </Form.Item>
        {showContactInfo ? <>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="mobileNumber"
            label={'Mobile Number'}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="email"
            label={'Email'}
            hasFeedback
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
          </>: null}


        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ReportAllegation;
