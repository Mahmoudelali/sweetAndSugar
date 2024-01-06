import React from 'react';
import { data } from '../../config';
import { Link } from 'react-router-dom';
import { webData } from '../../data';

const Brands = () => {
	return (
		<div className="mt-12">
			<h1 className="font-sevillana text-5xl text-[#e4cd48] font-semibold pl-4 text-center tracking-wider">
				Our Partners
			</h1>
			<main>
				{Object.entries(webData.products).map(
					([k, v], index) =>
						!!v.items.length && (
							<Link to={v.id} key={index}>
								<article key={index}>{v.brandLogo}</article>
							</Link>
						),
				)}
			</main>
		</div>
	);
};

export default Brands;
