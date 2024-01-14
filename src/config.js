import swal from 'sweetalert2';
// logos
import sevenDaysLogo from './assets/images/logos/sevendays.png';
import takisLogo from './assets/images/logos/takis.png';
import daisyLogo from './assets/images/logos/dasiy.png';
import nutellaLogo from './assets/images/logos/nutella.png';
import zengazLogo from './assets/images/logos/zengaz.png';
import lamsLogo from './assets/images/logos/lams.png';
import freshleysLogo from './assets/images/logos/freshleys.png';
import bayamesaLogo from './assets/images/logos/bayamesa.png';
import ovenDelightsLogo from './assets/images/logos/ovenDelights.png';
import nemosLogo from './assets/images/logos/nemos.png';
import tatesLogo from './assets/images/logos/tates.png';
import littleDebbieLogo from './assets/images/logos/littleDebbie.png';
import fritoLayLogo from './assets/images/logos/fritoLay.png';
import drakeLogo from './assets/images/logos/drakes.png';
import hostessLogo from './assets/images/logos/hostess.png';
import leGateauLogo from './assets/images/logos/leGateau.png';

import { IoMdInformationCircle } from 'react-icons/io';

import { IoCall, IoLogoFacebook, IoLogoWhatsapp, IoShareSocial } from 'react-icons/io5';
import { FaInstagram, FaSlideshare, FaTags, FaTiktok } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';

export const data = {
	sideLinks: [
		{ name: 'home', to: '/', icon: <GoHomeFill /> },
		{
			name: 'brands',
			to: '/brands',
			icon: <FaTags />,
		},
		{ name: 'about us', to: '/about', icon: <IoMdInformationCircle /> },
		{ name: 'contact', to: '/contact', icon: <IoCall /> },
	],
	sideLinksContact: [
		{
			name: 'instagram',
			url: 'https://www.instagram.com/sweetandsugarllc?igsh=dGd3aDQyejY5NDdp&utm_source=qr',
			icon: <FaInstagram />,
			bgcolor: '#dd2a7b',
		},
		{
			name: 'tiktok',
			url: 'https://www.tiktok.com/@sweetandsugarllc1?_t=8iwhfUTJiws&_r=1',
			icon: <FaTiktok />,
			bgcolor: '#000',
		},
		{
			name: 'Whatsapp',
			url: `https://wa.me/${process.env.REACT_APP_ADMIN_NUMBER}`,
			icon: <IoLogoWhatsapp />,
			bgcolor: '#25d366',
		},
		{
			name: 'Share',
			url: '',
			icon: <IoShareSocial />,
			bgcolor: '#48494B',
		},
	],
	brands: [
		{ name: 'sevenDays', brandLogo: sevenDaysLogo, id: 'sevenDays' },
		{ name: 'takis', brandLogo: takisLogo, id: 'takis' },
		{ name: 'daisy', brandLogo: daisyLogo, id: 'daisy' },
		{ name: 'nutella', brandLogo: nutellaLogo, id: 'nutella' },
		{ name: 'zengaz', brandLogo: zengazLogo, id: 'zengaz' },
		{ name: 'lams', brandLogo: lamsLogo, id: 'lams' },
		{ name: 'freshleys', brandLogo: freshleysLogo, id: 'mrsFreshleys' },
		{ name: 'bayamesa', brandLogo: bayamesaLogo, id: 'laBayamesa' },
		{
			name: 'ovenDelights',
			brandLogo: ovenDelightsLogo,
			id: 'ovenDelights',
		},
		{ name: 'nemos', brandLogo: nemosLogo, id: 'nemos' },
		{ name: 'tates', brandLogo: tatesLogo, id: 'tates' },
		{
			name: 'littleDebbie',
			brandLogo: littleDebbieLogo,
			id: 'littleDebbie',
		},
		{ name: 'fritoLay', brandLogo: fritoLayLogo, id: 'frito-lay' },
		{ name: 'drake', brandLogo: drakeLogo, id: 'drakes' },
		{ name: 'hostess', brandLogo: hostessLogo, id: 'hostess' },
		{ name: 'leGateau', brandLogo: leGateauLogo, id: 'leGateau' },
	],
	responsive: {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	},
};

export const scrollToTop = () => {
	window.scrollTo(0, 0);
};

export const copyUrlToClipboard = () => {
	navigator.clipboard.writeText(process.env.REACT_APP_SERVER_URL);
	swal.fire({
		title: `Sweet and sugar website URL copied to clipboard!`,
		icon: 'success',
	});
};
