import React, { useContext, useEffect, useState } from 'react';
import { webData } from '../../data';
import { SearchContent } from '../../App';

const Home = () => {
	const [originalData] = useState(webData.products);
	const [data, setData] = useState(originalData);
	const [search] = useContext(SearchContent);

	useEffect(() => {
		if (search === '') {
			setData(originalData);
			return;
		}

		const newData = Object.fromEntries(
			Object.entries(originalData).map(([key, value]) => {
				const foundData = value.items.filter(
					(prod) =>
						prod.brandName
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						prod.name.toLowerCase().includes(search.toLowerCase()),
				);
				return [key, { ...value, items: foundData }];
			}),
		);
		setData(newData);
	}, [search, originalData]);

	return (
		<section className="pt-3 px-2">
			{Object.entries(data).map(
				([key, value], index) =>
					value.items.length > 0 && (
						<div key={index} className="mb-8">
							<h2 className="text-6xl text-red-800 mb-5 font-sevillana tracking-widest px-3 first-letter:uppercase">
								{value.brandLogo}
							</h2>
							<div className="flex flex-wrap justify-evenly">
								{value.items.map((prod, index) => (
									<article
										className="w-[45%] border p-1 mb-3 rounded-lg shadow-md flex flex-col items-center"
										key={index}
									>
										<img
											src={prod.image_path}
											alt={prod.name}
										/>
										<p className="text-center text-sm tracking-wide">
											{prod.name}
										</p>
									</article>
								))}
							</div>
						</div>
					),
			)}
		</section>
	);
};

export default Home;
