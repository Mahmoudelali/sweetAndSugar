import React from 'react';
import { useParams } from 'react-router-dom';
import { webData } from '../../data';
import Product from '../../components/product';

const Brand = () => {
	let { brandId } = useParams();
	const brandContent = webData.products[brandId];

	return (
		<div className={`flex  flex-wrap justify-evenly pt-20 `}>
			<div className="mb-12 px-4">{brandContent.brandLogo}</div>
			{brandContent.items.map((prod, index) => (
				<Product
					prod={prod}
					key={index}
					spinnerColor={'red'}
					accent={brandContent.accent}
				/>
			))}
		</div>
	);
};

export default Brand;
