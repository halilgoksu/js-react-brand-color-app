import MainContext from './MainContext';
import Sidebar from './components/Sidebar'
import Content from './components/Content';
import BrandsData from './brands.json';
import {useEffect, useState} from 'react';
import Copied from './components/Copied';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Collection from './components/Collection';

function App() {

	let brandsArray = []
	
	Object.keys(BrandsData).map(key => {
		brandsArray.push(BrandsData[key])
	})

	const [brands, setBrands] = useState(brandsArray)
	const [selectedBrands, setSelectedBrands] = useState([])
	const [copied, setCopied] = useState(false)
	const [search, setSearch] = useState('')

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false)
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [copied])

	useEffect(() => {
		setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
	}, [search])
	//search e yazdigimiz zaman gelen datayi filterler, sadece eslesenler gorunur 

	useEffect(() => {
		document.title = 'React BrandColors Demo'
	}, [])

	const data = {
		brands,
		selectedBrands,
		setSelectedBrands,
		setCopied,
		search,
		setSearch
	}

	return (
		<>
			<MainContext.Provider value={data}>
				{copied && <Copied color={copied}/>}
				{/* copie varsa yukle ve paramere olarak da copied gonder */}
				<Sidebar />
				<Router>
					<Routes>
						<Route path="/"  element={ <Content />}></Route>
						<Route path="/collection/:slugs"  element={ <Collection />}></Route>
					</Routes>
				</Router>
			</MainContext.Provider>
		</>
	);
}

export default App;
