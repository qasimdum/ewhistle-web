import React, {useEffect} from 'react';
import {Input} from "antd";
import {transformDates} from "../../../../utils/utils";
import {getAllegationNotes} from "../../../../axios/history";
import {sendAllegationNote} from "../../../../axios/history";

function Note(props) {

  const [chatInput, setChatInput] = React.useState('');
  const [data, setData] = React.useState([]);

  const getNotes = React.useCallback(() => {
    getAllegationNotes(props.allegationId)
      .then(response => {
        if(response.status) {
          setData(response.data);
        }
      })
  }, [props.trackingId]);

  function sendHistory() {
    sendAllegationNote(props.allegationId, chatInput)
      .then(response => {
        if(response.status) {
          getNotes();
          setChatInput('')
        }
      })
  }

  useEffect(() => {
    setData([]);
    if(props.allegationId) {
      getNotes();
    }
  },[getNotes, props.allegationId]);

  return (
    <div className={'chat'}>
      <div className={'chat-content'}>
        {data.length > 0 ? data.map(item => {
          return (
            <div className={'chat-item'} key={item.id}>
              <div className={'chat-item-user'}>
                {transformDates(item.createdAt) + '  '}
                <strong>{item.userName}</strong>
              </div>
              <hr />
              {item.text}
            </div>
          )
        }) : "No Data Found"}
      </div>
      <div className={'chat-input'}>
        <Input.TextArea value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
        <div className={'chat-actions'}>
          <button onClick={sendHistory} className={'btn btn--primary btn--transparent'}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Note;
