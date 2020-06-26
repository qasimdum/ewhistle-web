import React, {useEffect} from 'react';
import {Input, message} from "antd";
import {
	getAllegationHistory,
	getAllegationHistoryAdmin,
	sendAllegationHistory, sendAllegationHistoryAdmin,
	uploadHistoryFile
} from "../../../../axios/history";
import './chat.css';
import {transformDates} from "../../../../utils/utils";

function Chat(props) {

	const [chatInput, setChatInput] = React.useState('');
	const [allegationId, setAllegationId] = React.useState(null);
	const [data, setData] = React.useState([]);
	const [file, setFile] = React.useState(null);

	const getHistory = React.useCallback(() => {
		getAllegationHistory(props.trackingId)
			.then(response => {
				if(response.status) {
					if(response.data[0].allegationId) {
						setData(response.data);
					}
					setAllegationId(response.data[0].id)
				}
			})
	}, [props.trackingId]);

	const getHistoryAdmin = React.useCallback(() => {
		getAllegationHistoryAdmin(props.allegationId)
			.then(response => {
				if(response.status) {
					if(response.data[0].allegationId) {
						setData(response.data);
					}
					setAllegationId(response.data[0].id)
				}
			})
	}, [props.allegationId]);

	function sendHistory() {
		if(props.allegationId) {
			sendHistoryAdmin();
			return;
		}
		sendAllegationHistory(allegationId, chatInput)
			.then(response => {
				if(response.status) {
					if(file) {
						uploadAllegationHistoryFile(file, response.insertId)
					}
					getHistory();
					setChatInput('')
				}
			})
	}

	function sendHistoryAdmin() {
		sendAllegationHistoryAdmin(allegationId, chatInput)
			.then(response => {
				if(response.status) {
					if(file) {
						uploadAllegationHistoryFile(file, response.insertId)
					}
					if(props.trackingId) {
						getHistory();
					}
					if(props.allegationId) {
						getHistoryAdmin();
					}
					setChatInput('')
				}
			})
	}

	function uploadAllegationHistoryFile(file, historyId) {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('historyId', historyId);

		uploadHistoryFile(formData)
			.then(response => {
				if(response.status) {
					setFile(null);
					message.success('File was uploaded successfully');
				}
			})
	}

	useEffect(() => {
		setData([]);
		if(props.trackingId) {
			getHistory();
		}
		if(props.allegationId) {
			getHistoryAdmin();
		}
	},[getHistory, getHistoryAdmin, props.trackingId, props.allegationId]);

	return (
		<div className={'chat'}>
			<div className={'chat-content'}>
				{data.length > 0 ? data.map(item => {
					return (
						<div className={'chat-item'} key={item.id}>
							<div className={'chat-item-user'}>
								{transformDates(item.createdAt) + '  '}
								<strong>{item.userName ? item.userName : 'By the informant'}</strong>
							</div>
							<hr />
							{item.text}
							<div>
								{item.fileUrl ? <a href={item.fileUrl}>{item.fileName}</a> : null}
							</div>
						</div>
					)
				}) : "No Data Found"}
			</div>
			<div className={'chat-input'}>
				<Input.TextArea value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
				<div className={'chat-actions'}>
					<div className={'pwc-forms__field pwc-forms__field--file form-group'} style={{marginBottom: 0}}>
						<div className={'form-control form-control--transparent form-control--fileupload-wrapper'}>
							<input type={'file'} onChange={e => setFile(e.target.files[0])} />
						</div>
					</div>
					<button onClick={sendHistory} className={'btn btn--primary btn--transparent'}>Send</button>
				</div>
			</div>
		</div>
	)
}
export default Chat;
