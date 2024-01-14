import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Product = ({ prod, spinnerColor, accent }) => {
	const [loading, setLoading] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = prod.image_path;

		img.onload = () => {
			setTimeout(() => {
				setLoading(false);
				setImageLoaded(true);
			}, 2000);
		};

		img.onerror = () => {
			setLoading(false);
		};

		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [prod.image_path]);

	return (
		<article
			className="w-[45%] h-[250px] px-1 py-4 mb-3 rounded-md backdrop-blur-3xl bg-[#ffffff10] shadow-md flex flex-col items-center justify-between "
			style={{ backgroundColor: accent ? `${accent}80` : '' }}
		>
			{loading && <Loader color={spinnerColor} />}
			{imageLoaded && (
				<img
					src={prod.image_path}
					alt={prod.name}
					style={{
						display: loading ? 'none' : 'block',
						width: '100%',
						height: 'auto',
					}}
				/>
			)}

			<p className="text-center text-sm tracking-wide font-kalam text-white">
				{prod.name}
			</p>
		</article>
	);
};

export default Product;
