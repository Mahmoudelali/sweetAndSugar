import React from 'react';
import { data } from '../../config';

const Brands = () => {
	return (
		<div className="mt-12">
			<h1 className="font-sevillana text-5xl text-red-700 font-semibold pl-4 text-center tracking-wider">
				Our Partners
			</h1>
			<main>
				{data.brands.map((brand, index) => (
					<article key={index}>
						<img src={brand.brandLogo} className="block mx-auto:" />
					</article>
				))}
			</main>
		</div>
	);
};

export default Brands;
