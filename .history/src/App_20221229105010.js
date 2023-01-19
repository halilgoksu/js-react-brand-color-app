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
    //bunu niye bos briktik ne ifade ediyor amk 

	Object.keys(BrandsData).map(key => {
		brandsArray.push(BrandsData[key])
	})
    // ne deemek bunu da cikaramadim 


	const [brands, setBrands] = useState(brandsArray)

	const [selectedBrands, setSelectedBrands] = useState([])
		    //elimizde brans denilen bir eleman var ki o brandsArray , her an degisbilir hazir ol 

	const [copied, setCopied] = useState(false)
	    //ilk etepda copied olmyan bir durmumuz var , boolean 

	const [search, setSearch] = useState('')
	    //bos olan her an dolacak olan bir '' alanimiz var 


	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false)
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [copied])
	    //copied elemani degistikce burasi calisir 


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
