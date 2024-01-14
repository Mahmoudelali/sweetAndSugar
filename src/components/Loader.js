import React from 'react';
import './loader.css';

const Loader = ({ color }) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="loader" style={{ color }} />
		</div>
	);
};

export default Loader;
