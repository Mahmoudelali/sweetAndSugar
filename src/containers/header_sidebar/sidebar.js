import React, { useState, useEffect, useRef, useContext } from 'react';
import './sidebar.css';
import { GrPowerReset } from 'react-icons/gr';

import { CiSearch } from 'react-icons/ci';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { SearchContent } from '../../App';
import logo from '../../assets/images/sweet and sugar .png';
import { data, scrollToTop } from '../../config';
import { Link } from 'react-router-dom';

export default function SideMenu({ isSearchDisplayed, setIsSearchDisplayed }) {
	const [search, setSearch] = useContext(SearchContent);
	const [isSideMenu, setSideMenu] = useState(false);
	const open = (isSideMenu) => {
		return setSideMenu(!isSideMenu);
	};
	const domeNode = useRef();
	const updateState = (event) => {
		if (domeNode.current.contains(event.target)) {
			return;
		}
		setSideMenu(false);
	};
	useEffect(() => {
		document.addEventListener('mousedown', updateState);
		return () => {
			document.removeEventListener('mousedown', updateState);
		};
	}, []);
	return (
		<header className="relative flex justify-center content-center">
			<div className="p-0 mx-3 flex items-center justify-between w-full py-6 border-b border-black z-20">
				<div className="flex gap-2 justify-between w-full fixed top-0 left-0 bg-white p-3">
					<div className="flex items-center">
						<CiSearch
							color="#000"
							size="25"
							onClick={() => {
								scrollToTop();
								setIsSearchDisplayed((prev) => !prev);
							}}
						/>
					</div>
					<Link
						to="/"
						className="w-[30%] "
						onClick={() => scrollToTop()}
					>
						<img src={logo} className="w-full max-h-full" />
					</Link>
					<span
						ref={domeNode}
						onClick={() => {
							open(isSideMenu);
						}}
						className="flex items-center"
					>
						{isSideMenu ? (
							<IoClose />
						) : (
							<HiBars3 color="#000" size="25" />
						)}
					</span>
				</div>
			</div>

			<div
				className="items-center gap-2	 absolute top-[170%] left-0  w-full px-3 "
				style={{ display: isSearchDisplayed ? 'flex' : 'none' }}
			>
				<input
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					placeholder="Search"
					className=" border  leading-10 px-3 rounded-md w-full"
					value={search}
				/>
				<GrPowerReset
					color="gray"
					onClick={() => setSearch('')}
					size={30}
				/>
			</div>

			<div
				className="left-0 h-full w-64 fixed shadow-2xl bg-white transition-all duration-500 ease-out pt-10 border-r border-gray-200 z-50"
				style={{ left: isSideMenu ? '0' : '-265px' }}
			>
				<Link to="/" className="flex justify-center h-14">
					<img src={logo} className="max-h-full " />
				</Link>

				<div className="mt-14  h-[80%] relative flex flex-col justify-between">
					<div>
						{data.sideLinks.map((link, index) => (
							<Link key={index} to={link.to}>
								<p className="flex items-center  gap-3 font-bold text-gray-700 py-3 px-6 border-b border-gray-200 font-sevillana tracking-widest ">
									<span className="text-2xl">
										{link.icon}
									</span>
									<span>{link.name}</span>
								</p>
							</Link>
						))}
					</div>

					<div>
						<h4 className="text-sm font-bold font-kalam text-center mb-2">
							Happy to hear from you!
						</h4>
						<div className="flex gap-2 justify-center">
							{data.sideLinksContact.map((link, index) => (
								<div
									className="rounded-full border border-gray p-1 "
									key={index}
								>
									<span
										className={`text-[${link.bgcolor}]`}
										style={{
											backgroundColor: link.bgcolor,
										}}
									>
										{link.icon}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
