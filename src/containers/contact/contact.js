import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaTiktok, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
	return (
		<section className="contact-us  px-8 flex items-center  h-screen">
			<div>
				<h2 className="text-2xl font-bold font-kalam text-red-700">
					Happy to hear from you
				</h2>
				<h1 className="font-semibold mb-6 font-kalam">Contact us</h1>

				<div className="flex items-center mb-4">
					<FaMapMarkerAlt className="mr-2" />
					<p className="text-[16px] font-serif">
						86-110 Orchard Street Hackensack, NJ 07601
						<br />
						Unit #4B
					</p>
				</div>

				<div className="flex items-center text-gray-700 mb-4">
					<FaPhone className="mr-2" />
					<p className="text-[16px] font-serif">
						Phone: +1(917) 780-2049
					</p>
				</div>

				<a
					href="https://www.tiktok.com/@sweetandsugarllc1?_t=8iwhfUTJiws&_r=1"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline flex items-center mb-3 "
				>
					<FaTiktok className="mr-2" />
					<span className="text-[16px]">TikTok</span>
				</a>

				<a
					href="https://www.instagram.com/sweetandsugarllc?igsh=dGd3aDQyejY5NDdp&utm_source=qr"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-500 hover:underline flex items-center "
				>
					<FaInstagram className="mr-2" />
					<span className="text-[16px]">Iranstagram</span>
				</a>
			</div>
		</section>
	);
};

export default ContactUs;
