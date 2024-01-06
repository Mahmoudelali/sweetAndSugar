import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/layout';
import Home from './containers/Home/home';
import { createContext, useState } from 'react';
import Brands from './containers/brands/brands';
import Brand from './containers/brand/brand';
import Contact from './containers/contact/contact';

export const SearchContent = createContext();

function App() {
	const [search, setSearch] = useState('');

	return (
		<SearchContent.Provider value={[search, setSearch]}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/brands" element={<Brands />}></Route>
						<Route path="/brands/:brandId" element={<Brand />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</SearchContent.Provider>
	);
}

export default App;
