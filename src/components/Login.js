import React from 'react';
import bcrypt from 'bcryptjs';
import { Button, Form, Input } from 'antd';

const salt = '$2b$10$Te2ug2qFYuEa1jgli3Aove';

export default function Login({ setToken }) {
	const handleLogin = ({ email, password }) => {
		console.log(email, password);
		const hash = bcrypt.hashSync(password, salt);
		console.log(hash);
		fetch('http://localhost:5080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					alert(data.error);
					return;
				}
				// console.log(data.token);
				setToken(data.token);
			})
			.catch(err => console.log(err));
	};
	return (
		<>
			<h3>Login</h3>;
			<Form
				name='login'
				labelCol={{ span: 8 }}
				wrapper={{ span: 16 }}
				onFinish={handleLogin}
			>
				<Form.Item name='email' label='Email'>
					<Input />
				</Form.Item>
				<Form.Item name='password' label='Password'>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Login
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
