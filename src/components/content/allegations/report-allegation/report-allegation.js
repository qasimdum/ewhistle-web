import React from 'react';
import {DatePicker, Form, Input, Radio, Select, Spin} from "antd";
import './report-allegation.css';
import entities from '../../../../enums/Entities';
import booleans, {enums as booleanEnums} from '../../../../enums/Boolean';
import allegationNatures, {enums as allegationNatureEnums} from '../../../../enums/AllegationNature';
import allegationOccurrences from '../../../../enums/AllegationOccurrence';
import countries from '../../../../enums/Country';
import jobPositions from '../../../../enums/JobPosition';
import AllegationNature from "./allegation-nature/allegation-nature";
import {getSingleAllegation} from "../../../../axios/allegations";
import Actions from "./actions";

function ReportAllegation(props) {

  const [form] = Form.useForm();
  const [formData, setFormData] = React.useState({});
  const [showAlreadyReported, setShowAlreadyReported] = React.useState(false);
  const [showAdditionalInformation, setShowAdditionalInformation] = React.useState(false);
  const [showEvidence, setShowEvidence] = React.useState(false);
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const [showAllegationNature1, setShowAllegationNature1] = React.useState(false);
  const [showAllegationNature2, setShowAllegationNature2] = React.useState(false);
  const [showAllegationNature3, setShowAllegationNature3] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (props.allegationId) {
      getSingleAllegation(props.allegationId)
        .then(response => {
          if (response.status) {
            setFormData(response.data);
            setIsLoading(false);
            form.setFieldsValue(generateFormValues(response.data))
          }
        })
    }
    if(props.allegationData) {
      setFormData(props.allegationData);
      setIsLoading(false);
      form.setFieldsValue(generateFormValues(props.allegationData))
    }
  }, [props.allegationId]);

  function generateFormValues(data) {
    if (data.allegationDate) {
      data.allegationDate = "";
    }
    for (let key in data) {
      if (data[key] !== null) {
        data[key] += '';
      }
    }
    if (data.departments) {
      data.departments = JSON.parse(data.departments);
      data.departments = data.departments.map(item => item.toString())
    }
    if (data.jobTitle) {
      data.jobTitle = JSON.parse(data.jobTitle);
      data.jobTitle = data.jobTitle.map(item => item.toString())
    }
    if (data.allegationNature) {
      allegationNatureChange(parseInt(data.allegationNature))
    }
    if(parseInt(data.radioAdditionalInformation) === booleanEnums.YES) {
      setShowAdditionalInformation(true);
    }
    if(parseInt(data.radioAlreadySubmitted) === booleanEnums.YES) {
      setShowAlreadyReported(true);
    }
    if(parseInt(data.radioContactInformation) === booleanEnums.YES) {
      setShowContactInfo(true);
    }
    if(parseInt(data.radioEvidence) === booleanEnums.YES) {
      setShowEvidence(true);
    }
    return data;
  }

  function allegationNatureChange(v) {
    v = parseInt(v);
    if (v === allegationNatureEnums.FRAUD) {
      setShowAllegationNature1(true);
      setShowAllegationNature2(false);
      setShowAllegationNature3(false);
    } else {
      if (v === allegationNatureEnums.MISCONDUCT) {
        setShowAllegationNature1(false);
        setShowAllegationNature2(true);
        setShowAllegationNature3(false);
      } else {
        if (v === allegationNatureEnums.HSE_INCIDENT) {
          setShowAllegationNature1(false);
          setShowAllegationNature2(false);
          setShowAllegationNature3(true);
        }
      }
    }
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
    <div>
      <Spin tip="Loading..." spinning={isLoading}>
        <Form
          initialValues={formData}
          form={form}
          name="normal_login"
          className="allegation-form"
        >
          <Form.Item
            {...formItemLayout}
            name="entity"
            labelAlign={"left"}
            label={'Name of organisation'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Select disabled>
              {entities.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="country"
            label={'Location of allegation'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Select disabled>
              {countries.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="jobPosition"
            label={'Your role'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Select disabled>
              {jobPositions.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="allegationNature"
            label={'Type of allegation'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Select disabled onChange={allegationNatureChange}>
              {allegationNatures.map(item => <Select.Option key={item.key}
                                                            value={item.key}>{item.value}</Select.Option>)}
            </Select>
          </Form.Item>
          <AllegationNature show={{showAllegationNature1, showAllegationNature2, showAllegationNature3}}
                            data={formData}/>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="allegationOccurrence"
            label={'Choose when allegation took place'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Radio.Group disabled>
              {allegationOccurrences.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="allegationDate"
            label={'Date of actual allegation'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <DatePicker disabled format={'DD/MM/YYYY'}/>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="radioAlreadySubmitted"
            label={'Has this allegation been reported before?'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Radio.Group disabled
                         onChange={(e) => setShowAlreadyReported(parseInt(e.target.value) === booleanEnums.YES)}>
              {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
              <Radio key={"2"} value={"2"}>Don't know</Radio>
            </Radio.Group>
          </Form.Item>
          {showAlreadyReported ? <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="previousReportText"
            label={'Provide more details when, to who and how the allegation was reported internally'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Input.TextArea disabled/>
          </Form.Item> : null}
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="radioAdditionalInformation"
            label={'Would you like to provide additional information to support this allegation?'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Radio.Group disabled
                         onChange={(e) => setShowAdditionalInformation(parseInt(e.target.value) === booleanEnums.YES)}>
              {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
            </Radio.Group>
          </Form.Item>
          {showAdditionalInformation ? <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="additionalInformationText"
            label={'Use the space below to share additional information such as what evidence (document or email report) and share any suggestions on how this can be prevented'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Input.TextArea disabled/>
          </Form.Item> : null}
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="radioEvidence"
            label={'Would you like to attach evidences for this allegation?'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Radio.Group disabled onChange={(e) => setShowEvidence(parseInt(e.target.value) === booleanEnums.YES)}>
              {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
            </Radio.Group>
          </Form.Item>
          {showEvidence ?
            <a href={formData.fileUrl}>{formData.fileName}</a>
            : null}
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            name="radioContactInformation"
            label={'Would you like to disclose your contact information?'}
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Radio.Group disabled onChange={(e) => setShowContactInfo(parseInt(e.target.value) === booleanEnums.YES)}>
              {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
            </Radio.Group>
          </Form.Item>
          {showContactInfo ? <>
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="mobileNumber"
              label={'Mobile Number'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input disabled/>
            </Form.Item>
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
              <Input type={'email'} disabled/>
            </Form.Item>
          </> : null}
        </Form>
        {props.allegationId ? <Actions allegationId={props.allegationId} setShowAllegation={props.setShowAllegation}/> : null}
      </Spin>
    </div>
  )
}

export default ReportAllegation;
