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

import { IoCall } from 'react-icons/io5';
import { FaTags } from 'react-icons/fa6';
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
	brands: [
		{ name: 'sevenDays', brandLogo: sevenDaysLogo },
		{ name: 'takis', brandLogo: takisLogo },
		{ name: 'daisy', brandLogo: daisyLogo },
		{ name: 'nutella', brandLogo: nutellaLogo },
		{ name: 'zengaz', brandLogo: zengazLogo },
		{ name: 'lams', brandLogo: lamsLogo },
		{ name: 'freshleys', brandLogo: freshleysLogo },
		{ name: 'bayamesa', brandLogo: bayamesaLogo },
		{ name: 'ovenDelights', brandLogo: ovenDelightsLogo },
		{ name: 'nemos', brandLogo: nemosLogo },
		{ name: 'tates', brandLogo: tatesLogo },
		{ name: 'littleDebbie', brandLogo: littleDebbieLogo },
		{ name: 'fritoLay', brandLogo: fritoLayLogo },
		{ name: 'drake', brandLogo: drakeLogo },
		{ name: 'hostess', brandLogo: hostessLogo },
		{ name: 'leGateau', brandLogo: leGateauLogo },
	],
};
