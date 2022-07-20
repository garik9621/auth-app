import React, { ChangeEventHandler, useState } from 'react';
import './Auth.css';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

export const Auth: React.FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (login && password) {
			axios
				.get('/auth', {
					params: {
						login,
						password,
					},
				})
				.then((res) => {
					console.log(res);
				});
		}
	};

	const onLoginChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setLogin(e.currentTarget.value);
	};

	const onPasswordChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setPassword(e.currentTarget.value);
	};

	return (
		<form className="Auth" onSubmit={(e) => submitHandler(e)}>
			<TextField
				label="Login"
				type="text"
				name="login"
				variant="outlined"
				margin="dense"
				value={login}
				onChange={(e) => onLoginChange(e)}
			/>

			<TextField
				label="Password"
				type="password"
				name="password"
				variant="outlined"
				margin="dense"
				value={password}
				onChange={(e) => onPasswordChange(e)}
			/>

			<Button variant="contained" type="submit">
				Submit
			</Button>
		</form>
	);
};
