import React from 'react';
import {Button, Col, Drawer, Form, Input, Row, Select, Space, Table, Tag} from "antd";
import tableConfig from '../../../config/table';
import {getDepartments} from "../../../axios/allegations";
import {getAUsers} from "../../../axios/users";
import roles, {getSingleRole} from "../../../enums/Roles";
import userStatuses, {enums as userStatusesEnum, getSingleUserStatus} from "../../../enums/UserStatus";
import UserDetails from "./details/details";

const searchFormItemLayout = {
	labelCol: {
		span: 24,
	},
	wrapperCol: {
		span: 24,
	},
};

function Users(props) {
	const [isLoading, setIsLoading] = React.useState(true);
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(0);
	const [showUser, setShowUser] = React.useState(false);
	const [selectedUser, setSelectedUser] = React.useState(null);
	const [departments, setDepartments] = React.useState([]);

	const [searchF] = Form.useForm();

	const searchData = React.useCallback((page = 1, param = null) => {
		setIsLoading(true);
		if (param) {
			getAUsers(param, tableConfig.calculateParam(page))
				.then(response => {
					setData(response.data);
					setCount(response.count);
					setCurrentPage(page);
					setIsLoading(false)
				})
		} else {
			searchF.validateFields()
				.then(values => {
					getAUsers(values, tableConfig.calculateParam(page))
						.then(response => {
							setData(response.data);
							setCount(response.count);
							setCurrentPage(page);
							setIsLoading(false)
						})
				})
				.catch(errorInfo => {
					setIsLoading(false)
				});
		}
	}, [searchF]);


	React.useEffect(() => {
		searchData(1);
	}, [searchData]);
	const handleTableChange = (pagination, filters, sorter) => {
		searchData(pagination.current);
	};

	React.useEffect(() => {
		getDepartments()
			.then(response => {
				setDepartments(response.data);
			})
			.catch(e => e)
	}, [props.myUser]);

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Username',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
			render: (role, row) => {
				return getSingleRole(role)
			}
		},
		{
			title: 'Department',
			dataIndex: 'departmentName',
			key: 'departmentName',
		},
		{
			title: 'Status',
			dataIndex: 'active',
			key: 'active',
			render: (record, row) => {
				let color = 'volcano';
				if (parseInt(record) === userStatusesEnum.ACTIVE) {
					color = 'green';
				}
				return (
					<Tag color={color}>
						{getSingleUserStatus(record)}
					</Tag>
				)
			}
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<Button onClick={() => {
						setShowUser(true);
						setSelectedUser(record)
					}}>View User</Button>
				</Space>
			),
		},
	];

	const searchForm = (
		<>
			<Form form={searchF}>
				<Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'User ID'}
											 name='id'>
							<Input style={{width: '100%'}}/>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Name'}
											 name='name'>
							<Input style={{width: '100%'}}/>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Email'}
											 name='email'>
							<Input style={{width: '100%'}}/>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Username'}
											 name='username'>
							<Input style={{width: '100%'}}/>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Role'}
											 name='role'>
							<Select allowClear>
								{roles.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
							</Select>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Department'}
											 name='departmentId'>
							<Select allowClear>
								{departments.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
							</Select>
						</Form.Item>
					</Col>
					<Col md={6} xs={24}>
						<Form.Item {...searchFormItemLayout}
											 label={'Status'}
											 name='active'>
							<Select allowClear>
								{userStatuses.map(item => <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>)}
							</Select>
						</Form.Item>
					</Col>
					<Col md={6} xs={24} style={{marginTop: 'auto', paddingBottom: 28}}>
						<Button type="primary" size={'small'} onClick={() => searchData(1)}>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);

	return <div>
		{searchForm}
		<Button type={"primary"} onClick={() => setShowUser(true)}>Add User</Button>
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
			title="User"
			placement="right"
			closable={false}
			width={800}
			onClose={() => {
				setShowUser(false);
				setSelectedUser(null);
			}}
			visible={showUser}
		>
			<UserDetails searchData={searchData} setShowUser={setShowUser} user={selectedUser}/>
		</Drawer>
	</div>
}

export default Users;
