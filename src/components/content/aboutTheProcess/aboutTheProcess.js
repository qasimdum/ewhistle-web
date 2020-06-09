import React from 'react';
import Flipbox from '../flipbox/flipbox';
import {Col, Row} from "antd";

function AboutTheProcess() {
	return (
		<Row gutter={16}>
			<Col xs={24} md={8}>
				<Flipbox
					frontSide={<p>Filing a complaint</p>}
					backSide={<p>Use the allegation report form to comprehensively describe allegation you are making. Ensure to include any supporting evidence that you have to substantiate your claims. After submission you will be provided a Unique ID to track the status of your application and establish a secure connection with the investigation team.</p>}
				/>
			</Col>
			<Col xs={24} md={8}>
				<Flipbox
					frontSide={<p>Investigative process</p>}
					backSide={<p>Upon submission, your allegation and any supporting documentation is thoroughly reviewed by impartial fact-finder to verify the fact submitted in the allegation. The investigator might require clarification on certain facts and will reach out through the secure communication channel.</p>}
				/>
			</Col>
			<Col xs={24} md={8}>
				<Flipbox
					frontSide={<p>Conclusion</p>}
					backSide={<p>At the conclusion of the investigation, the investigator will make a recommendation regarding whether the evidence provides reasonable cause to justify the allegation(s). If probable cause is found, subsequent legal and/or corrective action will be taken by relevant stakeholders.</p>}
				/>
			</Col>
		</Row>
	)
}
export default AboutTheProcess;
