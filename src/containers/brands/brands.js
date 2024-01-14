import React from 'react';
import { data } from '../../config';
import { Link } from 'react-router-dom';
import { webData } from '../../data';

const Brands = () => {
	return (
		<div className="mt-12 px-4">
			<h1 className="font-sevillana text-5xl text-red-700 font-semibold pl-4 text-center tracking-wider mb-6">
				Our Partners
			</h1>
			<main className="flex flex-row flex-wrap justify-evenly">
				{Object.entries(webData.products).map(
					([k, v], index) =>
						!!v.items.length && (
							<Link to={v.id} key={index} className="w-[45%]">
								<article
									key={index}
									className="flex  justify-center mb-4"
								>
									{v.brandLogo}
								</article>
							</Link>
						),
				)}
			</main>
		</div>
	);
};

export default Brands;
