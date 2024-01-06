import React, { useState } from 'react';
import SideBar from './header_sidebar/sidebar.js';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.js';

const Layout = () => {
	const [isSearchDisplayed, setIsSearchDisplayed] = useState(false);
	return (
		<div className="relative overflow-x-hidden min-h-screen ">
			<ScrollToTop />
			
			<SideBar
				isSearchDisplayed={isSearchDisplayed}
				setIsSearchDisplayed={setIsSearchDisplayed}
			/>
			<div
				className={`  duration-150 ${
					isSearchDisplayed ? ' pt-14 ' : ''
				}`}
			>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
