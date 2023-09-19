import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { categories } from '../utils/constants';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: transparent;
	color: white;
	border: none;
	// margin: 1rem;
	gap: 1rem;
	border-radius: 1rem;
	cursor: pointer;
	transition-duration: 0.3s;
	&.active,
	&:hover {
		background-color: #303030;
	}
`;

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	// const [selectedCategory, setSelectedCategory] = useState('New');
	return (
		<Stack
			sx={{
				overflowX: 'auto',
				width: '100%',
				margin: '2rem 0',
				gap: '1rem',
				padding: '0 1rem',
				height: { xs: 'auto', md: '95%' },
				flexDirection: { xs: 'row', md: 'column' },
			}}>
			{categories.map((category) => (
				<StyledButton
					onClick={() => {
						setSelectedCategory(category.name);
					}}
					className={category.name === selectedCategory ? 'active' : ''}
					key={category.name}>
					<span>{category.icon}</span>
					<span>{category.name}</span>
				</StyledButton>
			))}
		</Stack>
	);
};

export default Sidebar;
