import React from 'react';
import {Button, Form, Input, Tag} from "antd";
import './allegationTracking.css'
import {getAllegationByTrackingId} from "../../../axios/allegations";
import ReportAllegation from "../allegations/report-allegation/report-allegation";
import {getSingleAllegationStatus} from "../../../enums/AllegationStatus";
import {enums as allegationStatusesEnum} from "../../../enums/AllegationStatus";

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
  },
  wrapperCol: {
    xs: {span: 24},
  },
};

function AllegationTracking() {

  const [data, setData] = React.useState(null);
  const [tagColor, setTagColor] = React.useState('');
  function onSubmit(values) {
    getAllegation(values.trackingId)
  }

  function getAllegation(trackingId) {
    getAllegationByTrackingId(trackingId)
      .then(response => {
        if (response.status) {
          setData(response.data);
          if (parseInt(response.data.status) === allegationStatusesEnum.RESOLVED) {
            setTagColor('green');
          }
          console.log(parseInt(response.data.status) === allegationStatusesEnum.IN_REVIEW)
          if (parseInt(response.data.status) === allegationStatusesEnum.IN_REVIEW) {
            setTagColor('volcano');
          }
        }
      })
  }

  return (
    <div className={'allegation-tracking'}>
      <Form onFinish={onSubmit}>
        <Form.Item
          {...formItemLayout}
          name="trackingId"
          labelAlign={"left"}
          label={'Allegation Tracking Code'}
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>Submit</Button>
        </Form.Item>
      </Form>
      {data ? (
        <>
          <h4>Allegation Status: <Tag color={tagColor}>{getSingleAllegationStatus(data.status)}</Tag></h4>
          <ReportAllegation allegationData={data}/>
        </>
      ) : null}
    </div>
  )
}

export default AllegationTracking;
