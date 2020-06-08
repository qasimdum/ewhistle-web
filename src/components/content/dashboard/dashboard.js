import React from 'react';
import {Pie, HorizontalBar} from "react-chartjs-2";
import 'chartjs-plugin-datalabels';
import {Button, Col, DatePicker, Form, Input, Row, Select, Spin} from "antd";
import Box from "../box/box";
import {
	getAllegationSeverity,
	getAllegationStatus,
	getAllegationTypes,
	getAllegationTypesTop
} from "../../../axios/dashboard";
import allegationNatures, {getSingleAllegationNature} from "../../../enums/AllegationNature";
import severities, {getSingleSeverity} from "../../../enums/Severity";
import allegationStatuses, {getSingleAllegationStatus} from "../../../enums/AllegationStatus";
import {getDepartments} from "../../../axios/allegations";
import entities from "../../../enums/Entities";
import countries from "../../../enums/Country";
import {getSingleUser} from "../../../axios/users";
const initData = {
	labels: [],
	datasets: [
		{
			data: [],
			backgroundColor: ['#4287f5', '#00a367', '#60d668','#faef16','#ed4415','#b83359'],
			hoverBackgroundColor: ['#26559b', '#00a96a', '#4ba751','#c2b911','#ed4415','#b83359'],
		},
	],
};
const initData2 = {
	labels: [],
	datasets: [
		{
			data: [],
			backgroundColor: ['#4287f5', '#00a367', '#60d668','#faef16','#ed4415','#b83359'],
			hoverBackgroundColor: ['#26559b', '#00a96a', '#4ba751','#c2b911','#ed4415','#b83359'],
		},
	],
};
const initData3 = {
	labels: [],
	datasets: [
		{
			data: [],
			backgroundColor: ['#4287f5', '#00a367', '#60d668','#faef16','#ed4415','#b83359'],
			hoverBackgroundColor: ['#26559b', '#00a96a', '#4ba751','#c2b911','#ed4415','#b83359'],
		},
	],
};
const initData4 = {
	labels: [],
	datasets: [
		{
			data: [],
			backgroundColor: ['#4287f5', '#00a367', '#60d668','#faef16','#ed4415','#b83359'],
			hoverBackgroundColor: ['#26559b', '#00a96a', '#4ba751','#c2b911','#ed4415','#b83359'],
		},
	],
};
const options = {
	responsive: true,
	legend: {
		position: 'right',
		labels: {
			boxWidth: 10
		}
	},
	plugins: {
		datalabels: {
			color: 'black',
			formatter: function(value, context) {
				let sum = 0;
				context.dataset.data.forEach(item => {
					sum += item;
				})
				return (value / sum*100).toFixed(2) + '%';
			}
		}
	}
}

const searchFormItemLayout = {
	labelCol: {
		span: 24,
	},
	wrapperCol: {
		span: 24,
	},
};

function Dashboard() {

	const [isLoading1, setIsLoading1] = React.useState(true);
	const [isLoading2, setIsLoading2] = React.useState(true);
	const [isLoading3, setIsLoading3] = React.useState(true);
	const [isLoading4, setIsLoading4] = React.useState(true);

	const [data1, setData1] = React.useState({});
	const [data2, setData2] = React.useState({});
	const [data3, setData3] = React.useState({});
	const [data4, setData4] = React.useState({});

	const [departments, setDepartments] = React.useState([]);
	const [users, setUsers] = React.useState([]);

	const [searchF] = Form.useForm();

	const getAllDepartments = React.useCallback(() => {
		getDepartments()
			.then(response => {
				if(response.status) {
					setDepartments(response.data);
				}
			})
	}, []);

	const getUsers = React.useCallback((departmentId) => {
		getSingleUser({departmentId}, {offset: 0, limit: 100})
			.then(response => {
				if (response.status) {
					setUsers(response.data);
					searchF.setFieldsValue({assignee: undefined})
				}
			})
	}, [searchF]);

	React.useEffect(() => {
		getAllDepartments();
	}, [getAllDepartments]);

	const searchData = React.useCallback(() => {
		setIsLoading1(true);
		setIsLoading2(true);
		setIsLoading3(true);
		setIsLoading4(true);
		searchF.validateFields()
			.then(values => {
				getTypeOfAllegations(values);
				getSeverityOfAllegations(values);
				getStatusOfAllegations(values);
				getTopAllegations(values);
			})
			.catch(errorInfo => {
				console.log(errorInfo)
			});
	},[searchF]);

	function getTypeOfAllegations(params) {
		getAllegationTypes(params)
			.then(response => {
				if(response.status){
					const currentData = {...initData};
					currentData.labels = [];
					const tmpValues = [];

					currentData.datasets = [...currentData.datasets];
					response.data.forEach(item => {
						tmpValues.push(item.count);
						currentData.labels.push(getSingleAllegationNature(item.allegationNature))
					})
					currentData.datasets[0].data = [...tmpValues]
					setData1(currentData);
				}
			})
			.finally(() => setIsLoading1(false))
	}

	function getSeverityOfAllegations(params) {
		getAllegationSeverity(params)
			.then(response => {
				if(response.status){
					const currentData = {...initData2};
					currentData.labels = [];
					const tmpValues = [];

					currentData.datasets = [...currentData.datasets];
					response.data.forEach(item => {
						tmpValues.push(item.count);
						currentData.labels.push(getSingleSeverity(item.severity))
					})
					currentData.datasets[0].data = [...tmpValues]
					setData2(currentData);
				}
			})
			.finally(() => setIsLoading2(false))
	}
	function getStatusOfAllegations(params) {
		getAllegationStatus(params)
			.then(response => {
				if(response.status){
					const currentData = {...initData3};
					currentData.labels = [];
					const tmpValues = [];

					currentData.datasets = [...currentData.datasets];
					response.data.forEach(item => {
						tmpValues.push(item.count);
						currentData.labels.push(getSingleAllegationStatus(item.status))
					})
					currentData.datasets[0].data = [...tmpValues]
					setData3(currentData);
				}
			})
			.finally(() => setIsLoading3(false))
	}

	function getTopAllegations(params) {
		getAllegationTypesTop(params)
			.then(response => {
				if(response.status){
					const currentData = {...initData4};
					currentData.labels = [];
					const tmpValues = [];

					currentData.datasets = [...currentData.datasets];
					response.data.forEach(item => {
						tmpValues.push(item.count);
						currentData.labels.push(getSingleAllegationNature(item.allegationNature))
					})
					currentData.datasets[0].data = [...tmpValues]
					setData4(currentData);
				}
			})
			.finally(() => setIsLoading4(false))
	}

	React.useEffect(() => {
		searchData();
	}, [searchData]);



	const searchForm = (
		<Form form={searchF}>
			<Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Allegation ID'}
										 name='id'>
						<Input style={{width: '100%'}}/>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Organization'}
										 name='entity'>
						<Select allowClear>
							{entities.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Location'}
										 name='country'>
						<Select allowClear>
							{countries.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Status'}
										 name='status'>
						<Select allowClear>
							{allegationStatuses.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Allegation Nature'}
										 name='allegationNature'>
						<Select allowClear>
							{allegationNatures.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Severity'}
										 name='severity'>
						<Select allowClear>
							{severities.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Department'}
										 name='department'>
						<Select allowClear onChange={e => getUsers(e)}>
							{departments.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Assignee'}
										 name='assignee'>
						<Select allowClear>
							{users.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Date From'}
										 name='dateFrom'>
						<DatePicker style={{width: '100%'}} format={'DD/MM/YYYY'}/>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Date To'}
										 name='dateTo'>
						<DatePicker style={{width: '100%'}} format={'DD/MM/YYYY'}/>
					</Form.Item>
				</Col>
				<Col md={6} xs={24} style={{marginTop: 'auto', paddingBottom: 28}}>
					<Button type="primary" size={'small'} onClick={() => searchData(1)}>
						Search
					</Button>
				</Col>
			</Row>
		</Form>
	);

	return (
		<>
			{searchForm}
		<Row gutter={[16, 16]}>
			<Col md={12} xs={24}>
				<Box title={'Types of Allegation'}>
					<Spin spinning={isLoading1}>
						<Pie height={250} data={data1} options={options} />
					</Spin>
				</Box>
			</Col>
			<Col md={12} xs={24}>
				<Box title={'Severity of Allegations'}>
					<Spin spinning={isLoading2}>
						<Pie height={250} data={data2} options={options} />
					</Spin>
				</Box>
			</Col>
		</Row>
			<Row gutter={[16, 16]}>
				<Col md={12} xs={24}>
					<Box title={'Report Status'}>
						<Spin spinning={isLoading3}>
							<Pie height={250} data={data3} options={options} />
						</Spin>
					</Box>
				</Col>
				<Col md={12} xs={24}>
					<Box title={'Top 3 Allegations'}>
						<Spin spinning={isLoading4}>
							<HorizontalBar height={250} data={data4} options={{
								legend: {
									display: false
								},
								plugins: {
									datalabels: {
										display: false
									}
								}
							}} />
						</Spin>
					</Box>
				</Col>
			</Row>
		</>
	);
}
export default Dashboard;
