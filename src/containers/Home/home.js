import React, { useContext, useEffect, useState } from 'react';
import { webData } from '../../data';
import { SearchContent } from '../../App';
import Product from '../../components/product';
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data as dataConfig } from '../../config';
import testImage from '../../assets/images/bgimagetest.jpg';

// poster images
import poster1 from '../../assets/posters/WhatsApp Image 2024-01-10 at 11.35.20 PM.jpeg';
import poster2 from '../../assets/posters/WhatsApp Image 2024-01-10 at 11.35.20 PM (1).jpeg';
import poster3 from '../../assets/posters/WhatsApp Image 2024-01-10 at 11.35.20 PM (2).jpeg';
import poster4 from '../../assets/posters/WhatsApp Image 2024-01-10 at 11.35.20 PM (3).jpeg';

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
		<>
			<section className="mt-10 py-2 relative z-0">
				<Carousel
					responsive={dataConfig.responsive}
					swipeable={true}
					draggable={true}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={3000}
					keyBoardControl={true}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					<img src={poster1} />
					<img src={poster2} />
					<img src={poster3} />
					<img src={poster4} />
				</Carousel>
			</section>
			<section className="">
				<h1 className=" font-kalam text-4xl text-red-700 font-semibold pl-4 text-center tracking-wider  my-8">
					Where Every Bite Is Worth Craving
				</h1>
				{Object.entries(data).map(([key, value], index) => {
					var splicedArr = [];
					splicedArr = value.items.slice(0, 6);
					return (
						splicedArr.length > 2 && (
							<div
								key={index}
								style={{
									background: `linear-gradient(30deg ,${value.accent} , ${value.accent}20)`,
									margin: 0,
								}}
							>
								<Link
									to={`/brands/${value.id}`}
									className="text-6xl text-red-800 font-sevillana tracking-widest px-3 first-letter:uppercase"
								>
									<div className="flex justify-center">
										{value.brandLogo}
									</div>
								</Link>
								<div className="flex flex-wrap justify-evenly">
									{splicedArr.map((prod, index) => {
										return (
											<Product
												prod={prod}
												key={index}
												bg={value.accent}
											/>
										);
									})}
								</div>
								<div className="flex items-center justify-center  py-8">
									{value.items.length > 6 && (
										<Link
											to={`/brands/${value.id}`}
											style={{
												backgroundColor: value.accent,
											}}
											className="uppercase text-lg font-kalam text-white  py-2 px-4 rounded-lg inline-block mx-auto w-auto"
										>
											See more!
										</Link>
									)}
								</div>
							</div>
						)
					);
				})}
			</section>
		</>
	);
};

export default Home;
