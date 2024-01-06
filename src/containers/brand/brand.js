import React from 'react';
import { useParams } from 'react-router-dom';
import { webData } from '../../data';
import Product from '../../components/product';

const Brand = () => {
	let { brandId } = useParams();
	const brandContent = webData.products[brandId];
	console.log('brandContent', brandContent);

	return (
		<div className="flex  flex-wrap justify-evenly pt-20">
			{brandContent.brandLogo}
			{brandContent.items.map((prod, index) => (
				<Product prod={prod} key={index} />
			))}
		</div>
	);
};

export default Brand;
