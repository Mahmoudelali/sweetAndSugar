import React from 'react';

const Product = ({ prod, bg }) => {
	return (
		<article className="w-[45%] p-1 mb-3 rounded-md backdrop-blur-3xl bg-[#ffffff10] shadow-md flex flex-col items-center ">
			<img src={prod.image_path} alt={prod.name} />
			<p className="text-center text-sm tracking-wide font-kalam text-white">
				{prod.name}
			</p>
		</article>
	);
};

export default Product;
