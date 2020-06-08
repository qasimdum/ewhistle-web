import React from 'react';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Table, Tabs} from "antd";
import tableConfig from '../../../config/table';
import {getAllegations, getDepartments} from "../../../axios/allegations";
import entities, {getSingleEntity} from '../../../enums/Entities';
import countries, {getSingleCountry} from '../../../enums/Country';
import allegationNatures, {getSingleAllegationNature} from '../../../enums/AllegationNature';
import allegationStatuses, {getSingleAllegationStatus} from '../../../enums/AllegationStatus';
import severities from '../../../enums/Severity';
import {transformDates} from "../../../utils/utils";
import ReportAllegation from "./report-allegation/report-allegation";
import {getSingleUser} from "../../../axios/users";
import Chat from "./chat/chat";

const searchFormItemLayout = {
	labelCol: {
		span: 24,
	},
	wrapperCol: {
		span: 24,
	},
};

function Allegations() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(0);
	const [showAllegation, setShowAllegation] = React.useState(false);
	const [selectedAllegation, setSelectedAllegation] = React.useState(null);
	const [departments, setDepartments] = React.useState([]);
	const [users, setUsers] = React.useState([]);

	const [searchF] = Form.useForm();

	const searchData = React.useCallback((page = 1, param = null) => {
		setIsLoading(true);
		if (param) {
			getAllegations(param, tableConfig.calculateParam(page))
				.then(response => {
					setData(response.data);
					setCount(response.count);
					setCurrentPage(page);
					setIsLoading(false)
				})
		} else {
			searchF.validateFields()
				.then(values => {
					getAllegations(values, tableConfig.calculateParam(page))
						.then(response => {
							setData(response.data);
							setCount(response.count);
							setCurrentPage(page);
							setIsLoading(false)
						})
				})
				.catch(errorInfo => {
					console.log(errorInfo)
				});
		}
	}, [searchF]);


	React.useEffect(() => {
		searchData(1);
	}, [searchData]);

	const getAllDepartments = React.useCallback(() => {
		getDepartments()
			.then(response => {
				if (response.status) {
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

	const handleTableChange = (pagination, filters, sorter) => {
		searchData(pagination.current);
	};

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Date',
			dataIndex: 'allegationDate',
			key: 'allegationDate',
			render: (date) => {
				return transformDates(date);
			}
		},
		{
			title: 'Organization',
			dataIndex: 'entity',
			key: 'entity',
			render: (entity, row) => {
				return getSingleEntity(entity)
			}
		},
		{
			title: 'Location',
			dataIndex: 'country',
			key: 'country',
			render: (record, row) => {
				return getSingleCountry(record)
			}
		},
		{
			title: 'Nature',
			dataIndex: 'allegationNature',
			key: 'allegationNature',
			render: (record, row) => {
				return getSingleAllegationNature(record)
			}
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (record, row) => {
				return getSingleAllegationStatus(record)
			}
		},
		{
			title: 'Assigned To',
			dataIndex: 'assignee',
			key: 'assignee',
			render: (record, row) => {
				let str = '';
				if (row.userName) {
					str += row.userName;
				}
				if (row.departmentName) {
					str += ' (' + row.departmentName + ')';
				}
				return str;
			}
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<Button onClick={() => {
						setShowAllegation(true);
						setSelectedAllegation(record.id)
					}}>View Allegation</Button>
				</Space>
			),
		},
	];

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
							{allegationStatuses.map(item => <Select.Option key={item.key}
																														 value={item.key}>{item.value}</Select.Option>)}
						</Select>
					</Form.Item>
				</Col>
				<Col md={6} xs={24}>
					<Form.Item {...searchFormItemLayout}
										 label={'Allegation Nature'}
										 name='allegationNature'>
						<Select allowClear>
							{allegationNatures.map(item => <Select.Option key={item.key}
																														value={item.key}>{item.value}</Select.Option>)}
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

	return <div>
		{searchForm}
		<Table columns={columns} dataSource={data} bordered={false}
					 scroll={{x: 'max-content'}}
					 loading={isLoading}
					 rowKey="key"
					 onChange={handleTableChange}
					 pagination={{
						 defaultPageSize: tableConfig.pageSize,
						 pageSize: tableConfig.pageSize,
						 total: count,
						 current: currentPage
					 }}/>
		<Drawer
			title="Allegation"
			placement="right"
			closable={false}
			width={800}
			onClose={() => {
				setShowAllegation(false);
				setSelectedAllegation(null);
			}}
			visible={showAllegation}
		>
			<Tabs defaultActiveKey="1" onChange={() => {
			}}>
				<Tabs.TabPane tab="Chat" key="1">
					<Chat allegationId={selectedAllegation}/>
				</Tabs.TabPane>
				<Tabs.TabPane tab="Allegation Info" key="2">
					<ReportAllegation setShowAllegation={setShowAllegation} allegationId={selectedAllegation}/>
				</Tabs.TabPane>
			</Tabs>
		</Drawer>
	</div>
}

export default Allegations;
