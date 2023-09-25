import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as User } from '../assets/person-circle.svg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Form = styled.form`
	display: flex;
	border-radius: 20px;
	border: 1.5px solid #303030;
	overflow: hidden;
	height: 2.5rem;
	width: 40%;
	@media (max-width: 768px) {
		width: 40px;
	}
`;

const StyledTextField = styled.input`
	padding: 0 20px;
	width: 85%;
	height: 100%;
	color: white;
	background-color: transparent;
	outline: none;
	border: none;
	font-size: 1rem;

	@media (max-width: 768px) {
		width: 0%;
		padding: 0;
		height: 0;
	}
`;

const SearchIcon = styled.div`
	background-color: #303030;
	padding: 0px;
	width: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`search/${searchTerm}`);
		}
	};
	return (
		<Stack
			direction="row"
			sx={{
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '0.5rem 2rem',
			}}>
			<Box
				className="logo-container"
				width="100px">
				<Link to="/">
					<Logo />
				</Link>
			</Box>
			<Form
				onSubmit={handleSubmit}
				action=""
				className="search-form">
				<StyledTextField
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
					type="text"
					value={searchTerm}
					placeholder="Search"
				/>
				<SearchIcon
					onClick={handleSubmit}
					className="search-icon">
					<Search />
				</SearchIcon>
			</Form>
			{/* <Box>
				<User />
			</Box> */}
		</Stack>
	);
};

export default Navbar;
