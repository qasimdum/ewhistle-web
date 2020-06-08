import React from 'react';
import {Button, Form, Input, Tabs, Tag} from "antd";
import './allegationTracking.css'
import {getAllegationByTrackingId} from "../../../axios/allegations";
import ReportAllegation from "../allegations/report-allegation/report-allegation";
import {getSingleAllegationStatus} from "../../../enums/AllegationStatus";
import {enums as allegationStatusesEnum} from "../../../enums/AllegationStatus";
import Chat from "../allegations/chat/chat";

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
  const [trackingId, setTrackingId] = React.useState('');

  function onSubmit(values) {
    setTrackingId(values.trackingId);
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
          <Tabs defaultActiveKey="1" onChange={() => {}}>
            <Tabs.TabPane tab="Chat" key="1">
              <Chat trackingId={trackingId} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Allegation Info" key="2">
              <ReportAllegation allegationData={data}/>
            </Tabs.TabPane>
          </Tabs>
        </>
      ) : null}
    </div>
  )
}

export default AllegationTracking;