import React, {useEffect} from 'react';
import {Button, DatePicker, Form, Input, message, Radio, Select, Upload} from "antd";
import './report-allegation.css';
import entities from '../../../enums/Entities';
import booleans, {enums as booleanEnums} from '../../../enums/Boolean';
import allegationNatures, {enums as allegationNatureEnums} from '../../../enums/AllegationNature';
import allegationOccurrences, {enums as occurrenceEnum} from '../../../enums/AllegationOccurrence';
import jobPositions, {enums as jobPositionEnum} from '../../../enums/JobPosition';
import countries from '../../../enums/Country';
import {UploadOutlined} from '@ant-design/icons';
import AllegationNature from "./allegation-nature/allegation-nature";
import {saveAllegation, uploadFile} from '../../../axios/allegations';
import {useHistory} from 'react-router-dom';

function ReportAllegation() {

  const [form] = Form.useForm();
  const [showAlreadyReported, setShowAlreadyReported] = React.useState(false);
  const [showAdditionalInformation, setShowAdditionalInformation] = React.useState(false);
  const [showEvidence, setShowEvidence] = React.useState(false);
  const [showContactInfo, setShowContactInfo] = React.useState(false);
  const [showOtherRoleInput, setOtherRoleInput] = React.useState(false);
  const [allegationOccurrence, setAllegationOccurrence] = React.useState(null);

  const [showAllegationNature1, setShowAllegationNature1] = React.useState(false);
  const [showAllegationNature2, setShowAllegationNature2] = React.useState(false);
  const [showAllegationNature3, setShowAllegationNature3] = React.useState(false);

  const [file, setFile] = React.useState(null);

  const history = useHistory();

  function onSubmit(values) {
    saveAllegation(values)
      .then(response => {
        if (response.status) {
          if (file) {
            uploadAllegationFile(file, response.data)
          }
          if (response.trackingId) {
            localStorage.setItem('trackingId', response.trackingId);
            history.push('/allegation_submit');
          }
          message.success('Allegation was saved successfully');
        } else {
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
        if (response.status) {
          message.success('File was uploaded successfully');
        }
      })
  }

  function getMaxMinDate() {
    const minMax = {min: null, max: null};
    if (allegationOccurrence === occurrenceEnum.ALREADY_OCCURRED || allegationOccurrence === occurrenceEnum.STILL_OCCURRING) {
      minMax.max = new Date().toISOString().split("T")[0];
    }
    if (allegationOccurrence === occurrenceEnum.MAY_OCCUR) {
      minMax.min = new Date().toISOString().split("T")[0];
    }
    return minMax
  }

  function onFinishFailed(er) {
    console.error(er);
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
    <section className="page-section page-section--no-pad fullwidth section-col--white">
      <div className="parsys sectionpar">
        <div className="container dpe-component-wrapper pwc-forms">
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
              label={'Name of organisation'}
              className={'pwc-forms__field pwc-forms__field--select form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select className={'select-form-control'}>
                {entities.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="country"
              label={'Location of allegation'}
              className={'pwc-forms__field pwc-forms__field--select form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select className={'select-form-control'}>
                {countries.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="jobPosition"
              label={'Your role'}
              className={'pwc-forms__field pwc-forms__field--select form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select className={'select-form-control'} onChange={e => setOtherRoleInput(parseInt(e) === jobPositionEnum.OTHER)}>
                {jobPositions.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
            {showOtherRoleInput ? (
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherJobPosition"
                label={'Other'}
                className={'pwc-forms__field pwc-forms__field--text form-group'}
                rules={[
                  {
                    required: true,
                    message: `This field is required`,
                  },
                ]}
              >
                <Input className={'form-control'}/>
              </Form.Item>
            ) : null}
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="allegationNature"
              label={'Type of allegation'}
              className={'pwc-forms__field pwc-forms__field--select form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select className={'select-form-control'} onChange={allegationNatureChange}>
                {allegationNatures.map(item => <Select.Option key={item.key}
                                                              value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
            <AllegationNature show={{showAllegationNature1, showAllegationNature2, showAllegationNature3}} />
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="allegationOccurrence"
              label={'Choose when allegation took place'}
              className={'pwc-forms__field pwc-forms__field--select form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Radio.Group onChange={(e) => {
                setAllegationOccurrence(parseInt(e.target.value))
              }}>
                {allegationOccurrences.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
              </Radio.Group>
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="allegationDate"
              label={'Date of actual allegation'}
              className={'pwc-forms__field pwc-forms__field--date form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <input {...getMaxMinDate()} type={'date'} className={'form-control pwc-form-datepicker__input'} placeholder={'MM/DD/YYYY'}/>
              {/*<DatePicker format={'DD/MM/YYYY'}
                          disabledDate={current => {
                            if (allegationOccurrence === occurrenceEnum.ALREADY_OCCURRED) {
                              return current > new Date();
                            }
                            if (allegationOccurrence === occurrenceEnum.MAY_OCCUR) {
                              return current < new Date();
                            }
                            if (allegationOccurrence === occurrenceEnum.STILL_OCCURRING) {
                              return current > new Date();
                            }
                            return true
                          }}/>*/}
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
              className={'pwc-forms__field pwc-forms__field--textarea form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input.TextArea className={'form-control form-control--textarea-wrapper'}/>
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
              <Radio.Group
                onChange={(e) => setShowAdditionalInformation(parseInt(e.target.value) === booleanEnums.YES)}>
                {booleans.map(item => <Radio key={item.key} value={item.key}>{item.value}</Radio>)}
              </Radio.Group>
            </Form.Item>
            {showAdditionalInformation ? <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              name="additionalInformationText"
              label={'Use the space below to share additional information such as what evidence (document or email report) and share any suggestions on how this can be prevented'}
              className={'pwc-forms__field pwc-forms__field--textarea form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input.TextArea className={'form-control form-control--textarea-wrapper'}/>
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
              getValueFromEvent={(e) => {
                /*if (Array.isArray(e.target.files)) {
                  return e.target.files;
                }
                return e && e.fileList;*/
                return e.target.files
              }}
              label={'Attach evidence'}
              className={'pwc-forms__field pwc-forms__field--file form-group'}
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <div className={'form-control form-control--transparent form-control--fileupload-wrapper'}>
                <input type={'file'} onChange={e => setFile(e.target.files[0])} />
              </div>
              {/*<Upload defaultFileList={[]} beforeUpload={(e) => {
                setFile(e);
                return false;
              }}>
                <Button>
                  <UploadOutlined/> Click to Upload
                </Button>
              </Upload>*/}
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
                className={'pwc-forms__field pwc-forms__field--text form-group'}
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input className={'form-control'}/>
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="email"
                label={'Email'}
                className={'pwc-forms__field pwc-forms__field--text form-group'}
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
                <Input type={'email'} className={'form-control'}/>
              </Form.Item>
            </> : null}
            <Form.Item>
              <Form.Item>
                <button type={'submit'} className={'btn btn--primary btn--transparent'}>Submit</button>
              </Form.Item>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default ReportAllegation;
