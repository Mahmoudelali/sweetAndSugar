import React from 'react';
import { aboutUsContent } from '../../data';

const AboutUs = () => {
	return (
		<section className="about-us px-8 py-12">
			<h2 className="text-3xl font-bold font-kalam mb-4 text-red-700">
				{aboutUsContent.welcome.heading}
			</h2>
			<p className="tracking-wide  text-gray-700 mb-8">
				{aboutUsContent.welcome.paragraph}
			</p>

			<div className="border-t-2 border-gray-300 pt-6 mt-6">
				<h3 className="text-2xl font-bold mb-4 font-kalam text-red-700">
					{aboutUsContent.ourStory.heading}
				</h3>
				<p className="tracking-wide  text-gray-700 mb-8">
					{aboutUsContent.ourStory.paragraph}
				</p>
			</div>

			<div className="border-t-2 border-gray-300 pt-6 mt-6">
				<h3 className="text-2xl font-bold mb-4 font-kalam text-red-700">
					{aboutUsContent.whatSetsUsApart.heading}
				</h3>
				<p className="tracking-wide  text-gray-700 mb-8">
					{aboutUsContent.whatSetsUsApart.paragraph}
				</p>
			</div>

			<div className="border-t-2 border-gray-300 pt-6 mt-6">
				<h3 className="text-2xl font-bold mb-4 font-kalam text-red-700">
					{aboutUsContent.whyChooseUs.heading}
				</h3>
				<ul className="list-disc list-inside text-gray-700 mb-8">
					{aboutUsContent.whyChooseUs.list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>

			<p className="tracking-wide  text-gray-700">
				{aboutUsContent.closing.paragraph}
			</p>
		</section>
	);
};

export default AboutUs;
