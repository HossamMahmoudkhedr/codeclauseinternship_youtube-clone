import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
const RootLayout = () => {
	return (
		<>
			<div className="root-layout">
				<Navbar />
			</div>

			<Outlet />
		</>
	);
};

export default RootLayout;
