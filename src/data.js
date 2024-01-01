// const inventory = [
// 	{ name: 'asparagus', type: 'vegetables', quantity: 5 },
// 	{ name: 'bananas', type: 'fruit', quantity: 0 },
// 	{ name: 'goat', type: 'meat', quantity: 23 },
// 	{ name: 'cherries', type: 'fruit', quantity: 5 },
// 	{ name: 'fish', type: 'meat', quantity: 22 },
// ];
// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result);

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

//seven days
import ChocolateCroissant from './assets/images/products/7days croissant/Croissant, Chocolate Croissant, Breakfas.png';
import dulceCroissant from './assets/images/products/7days croissant/Dulce de Leche with Caramel Flavor Filling.png';
import peanut2 from './assets/images/products/7days croissant/peanut.png';
import peanutCroissant from './assets/images/products/7days croissant/peanut 2.png';
import strawberryAndVanilla from './assets/images/products/7days croissant/strawberry and vanilla.png';
import vanillaCroissant from './assets/images/products/7days croissant/vanilla.png';

//daisy
import blackAndWhiteSupreme from './assets/images/products/daisy/black and white supreme.png';
import gourmetBananaNutMuffin from './assets/images/products/daisy/gourment banana nut muffin.png';
import gourmetBananaNutPoundCake from './assets/images/products/daisy/gourment banana nut muffin.png';
import gourmetChocolateChipMuffin from './assets/images/products/daisy/gourment chocolate chip muffin.png';
import gourmetChocolateChipPoundCake from './assets/images/products/daisy/Gourment chocolate chip pound cake.png';
import gourmetCornMuffin from './assets/images/products/daisy/gourment corn muffin.png';
import gourmetLemonPoundCake from './assets/images/products/daisy/gourment lemon pound cake.png';
import gourmetMarblePoundCake from './assets/images/products/daisy/Gourment marble pound cake.png';
import guavaJellyRoll from './assets/images/products/daisy/guava jelly roll.png';
import linzerTart from './assets/images/products/daisy/linzer tart.png';
import orangeCranberryMuffin from './assets/images/products/daisy/Orange cranberry muffin.png';
import raspberryJellyRoll from './assets/images/products/daisy/raspberry jelly roll.png';

export const webData = {
	webIcon: '',

	products: {
		croissant: {
			brandLogo: <img src={sevenDaysLogo} />,
			items: [
				{
					id: 'Chocolate-Croissant',
					name: 'Chocolate Croissant',
					image_path: ChocolateCroissant,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
				{
					id: 'Dulce-de-Leche-with-Caramel-Flavor-Filling',
					name: 'Dulce de Leche with Caramel Flavor Filling',
					image_path: dulceCroissant,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
				{
					id: 'Peanut-2',
					name: 'Peanut 2',
					image_path: peanut2,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
				{
					id: 'Peanut',
					name: 'Peanut',
					image_path: peanutCroissant,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
				{
					id: 'Strawberry-and-Vanilla',
					name: 'Strawberry and Vanilla',
					image_path: strawberryAndVanilla,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
				{
					id: 'Vanilla',
					name: 'Vanilla',
					image_path: vanillaCroissant,
					imagesList: [],
					image: '',
					brandName: 'Seven Days',
				},
			],
		},
		takis: {
			brandLogo: <img src={takisLogo} />,
			items: [
				{
					id: 'lays-baked-original',
					name: 'Lay Baked Original',
					image_path:
						'./assets/images/products/chips/lay-baked-original.png',
					brandName: 'lays',
				},
				{
					id: 'lays-bbq',
					name: 'Lays BBQ',
					image_path: './assets/images/products/chips/lays-bbq.png',
					brandName: 'lays',
				},
				{
					id: 'lays-classic',
					name: 'Lays Classic',
					image_path:
						'./assets/images/products/chips/lays-classic.png',
					brandName: 'lays',
				},
				{
					id: 'lays-lemon',
					name: 'Lays Lemon',
					image_path: './assets/images/products/chips/lays-lemon.png',
					brandName: 'lays',
				},
				{
					id: 'lays-sour-and-cream-onion',
					name: 'Lays Sour and Cream Onion',
					image_path:
						'./assets/images/products/chips/lays-sour-and-cream-onion.png',
					brandName: 'lays',
				},
				{
					id: 'miss-bickies-sea-salt-and-vinegar',
					name: 'Miss Bickies Sea Salt and Vinegar',
					image_path:
						'./assets/images/products/chips/miss-bickies-sea-salt-and-vinegar.png',
					brandName: '',
				},
				{
					id: 'miss-bickies-sea-salt',
					name: 'Miss Bickies Sea Salt',
					image_path:
						'./assets/images/products/chips/miss-bickies-sea-salt.png',
					brandName: '',
				},
				{
					id: 'miss-vickies-jalapeno',
					name: 'Miss Vickies Jalapeno',
					image_path:
						'./assets/images/products/chips/miss-vickies-jalapeno.png',
					brandName: '',
				},
				{
					id: 'rold-gold-pretzel-thins',
					name: 'Rold Gold Pretzel Thins',
					image_path:
						'./assets/images/products/chips/rold-gold-pretzel-thins.png',
					brandName: '',
				},
				{
					id: 'ruffles-baked-cheddar-and-sour-cream',
					name: 'Ruffles Baked Cheddar and Sour Cream',
					image_path:
						'./assets/images/products/chips/ruffles-baked-cheddar-and-sour-cream.png',
					brandName: 'Ruffles',
				},
				{
					id: 'ruffles-cheddar-and-sour-cream',
					name: 'Ruffles Cheddar and Sour Cream',
					image_path:
						'./assets/images/products/chips/ruffles-cheddar-and-sour-cream.png',
					brandName: 'Ruffles',
				},
				{
					id: 'ruffles-flamin-hot-cheddar-and-sour-cream',
					name: 'Ruffles Flamin Hot Cheddar and Sour Cream',
					image_path:
						'./assets/images/products/chips/ruffles-flamin-hot-cheddar-and-sour-cream.png',
					brandName: 'Ruffles',
				},
				{
					id: 'smartfood-white-cheddar',
					name: 'Smartfood White Cheddar',
					image_path:
						'./assets/images/products/chips/smartfood-white-cheddar.png',
					brandName: 'smartfood',
				},
				{
					id: 'sun-chips-garden-salsa',
					name: 'Sun Chips Garden Salsa',
					image_path:
						'./assets/images/products/chips/sun-chips-garden-salsa.png',
					brandName: 'sun chips',
				},
				{
					id: 'sun-chips-harvest-cheddar',
					name: 'Sun Chips Harvest Cheddar',
					image_path:
						'./assets/images/products/chips/sun-chips-harvest-cheddar.png',
					brandName: 'sun chips',
				},
				{
					id: 'sun-ships-original',
					name: 'Sun Chips Original',
					image_path:
						'./assets/images/products/chips/sun-ships-original.png',
					brandName: 'sun chips',
				},
				{
					id: 'takis-blue-heat',
					name: 'Takis Blue Heat',
					image_path:
						'./assets/images/products/chips/takis-blue-heat.png',
					brandName: 'Takis',
				},
				{
					id: 'takis-nacho-xplosion',
					name: 'Takis Nacho Xplosion',
					image_path:
						'./assets/images/products/chips/takis-nacho-xplosion.png',
					brandName: 'Takis',
				},
				{
					id: 'tostitos-salsa-verde',
					name: 'Tostitos Salsa Verde',
					image_path:
						'./assets/images/products/chips/tostitos-salsa-verde.png',
					brandName: 'Tostitos',
				},
				{
					id: 'cheetos-crunchy',
					name: 'Cheetos Crunchy',
					image_path:
						'./assets/images/products/chips/cheetos-crunchy.png',
					brandName: 'Cheetos',
				},
				{
					id: 'cheetos-flaming-hot-crunchy',
					name: 'Cheetos Flaming Hot Crunchy',
					image_path:
						'./assets/images/products/chips/cheetos-flaming-hot-crunchy.png',
					brandName: 'Cheetos',
				},
				{
					id: 'cheetos-puffs',
					name: 'Cheetos Puffs',
					image_path:
						'./assets/images/products/chips/cheetos-puffs.png',
					brandName: 'Cheetos',
				},
				{
					id: 'chesters-flaming-hot-fries',
					name: 'Chesters Flaming Hot Fries',
					image_path:
						'./assets/images/products/chips/chesters-flaming-hot-fries.png',
					brandName: 'chesters',
				},
				{
					id: 'cracker-jack',
					name: 'Cracker Jack',
					image_path:
						'./assets/images/products/chips/cracker-jack.png',
					brandName: 'cracker-jack',
				},
				{
					id: 'doritos-dinamita-chile-lemon',
					name: 'Dorito Dinamita Chile Lemon',
					image_path:
						'./assets/images/products/chips/doriro-dinamita-chile-lemon.png',
					brandName: 'Doritos',
				},
				{
					id: 'doritos-cool-ranch',
					name: 'Doritos Cool Ranch',
					image_path:
						'./assets/images/products/chips/doritos-cool-ranch.png',
					brandName: 'Doritos',
				},
				{
					id: 'doritos-flaming-cool-ranch',
					name: 'Doritos Flaming Cool Ranch',
					image_path:
						'./assets/images/products/chips/doritos-flaming-cool-ranch.png',
					brandName: 'Doritos',
				},
				{
					id: 'doritos-flaming-hot',
					name: 'Doritos Flaming Hot',
					image_path:
						'./assets/images/products/chips/doritos-flaming-hot.png',
					brandName: 'Doritos',
				},
				{
					id: 'doritos-nacho-cheese',
					name: 'Doritos Nacho Cheese',
					image_path:
						'./assets/images/products/chips/doritos-nacho-cheese.png',
					brandName: 'Doritos',
				},
				{
					id: 'doritos-spicy-sweet-chili',
					name: 'Doritos Spicy Sweet Chili',
					image_path:
						'./assets/images/products/chips/doritos-spicy-sweet-chili.png',
					brandName: 'Doritos',
				},
				{
					id: 'fritos',
					name: 'Fritos',
					image_path: './assets/images/products/chips/fritos.png',
					brandName: 'fritos',
				},
				{
					id: 'lams-plantanis',
					name: 'Lams Plantanis',
					image_path:
						'./assets/images/products/chips/lams-plantanis.png',
					brandName: 'Lams',
				},
				{
					id: 'lams-tiras',
					name: 'Lams Tiras',
					image_path: './assets/images/products/chips/lams-tiras.png',
					brandName: 'Lams',
				},
				{
					id: 'lams-yuca',
					name: 'Lams Yuca',
					image_path: './assets/images/products/chips/lams-yuca.png',
					brandName: 'Lams',
				},
			],
		},
		daisy: {
			brandLogo: <img src={daisyLogo} />,
			items: [
				{
					id: 'black and white supreme',
					name: 'Black and White Supreme',
					image_path: blackAndWhiteSupreme,
					brandName: 'daisy',
				},
				{
					id: 'gourment banana nut muffin',
					name: 'Gourmet Banana Nut Muffin',
					image_path: gourmetBananaNutMuffin,
					brandName: 'daisy',
				},
				{
					id: 'gourment banana nut pound cake',
					name: 'Gourmet Banana Nut Pound Cake',
					image_path: gourmetBananaNutPoundCake,
					brandName: 'daisy',
				},
				{
					id: 'gourment chocolate chip muffin',
					name: 'Gourmet Chocolate Chip Muffin',
					image_path: gourmetChocolateChipMuffin,
					brandName: 'daisy',
				},
				{
					id: 'gourment chocolate chip pound cake',
					name: 'Gourmet Chocolate Chip Pound Cake',
					image_path: gourmetChocolateChipPoundCake,
					brandName: 'daisy',
				},
				{
					id: 'gourment corn muffin',
					name: 'Gourmet Corn Muffin',
					image_path: gourmetCornMuffin,
					brandName: 'daisy',
				},
				{
					id: 'gourment lemon pound cake',
					name: 'Gourmet Lemon Pound Cake',
					image_path: gourmetLemonPoundCake,
					brandName: 'daisy',
				},
				{
					id: 'gourment marble pound cake',
					name: 'Gourmet Marble Pound Cake',
					image_path: gourmetMarblePoundCake,
					brandName: 'daisy',
				},
				{
					id: 'guava jelly roll',
					name: 'Guava Jelly Roll',
					image_path: guavaJellyRoll,
					brandName: 'daisy',
				},
				{
					id: 'linzer tart',
					name: 'Linzer Tart',
					image_path: linzerTart,
					brandName: 'daisy',
				},
				{
					id: 'orange cranberry muffin',
					name: 'Orange Cranberry Muffin',
					image_path: orangeCranberryMuffin,
					brandName: 'daisy',
				},
				{
					id: 'raspberry jelly roll',
					name: 'Raspberry Jelly Roll',
					image_path: raspberryJellyRoll,
					brandName: 'daisy',
				},
			],
		},
	},
};
