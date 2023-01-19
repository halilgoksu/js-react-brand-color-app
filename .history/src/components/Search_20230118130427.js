import {useContext, useState} from 'react'
import {GrSearch} from 'react-icons/gr';
import MainContext from '../MainContext';

function Search() {
	const {search, setSearch} = useContext(MainContext)

	function Go(e){
		const Lower =(e.target.value.toLowerCase());
		setSearch(Lower);
	}

	return (
		<div className="search">
			<div className="icon">
			 <GrSearch />
			</div>
			<input  type="text" onChange={Go}
			 placeholder="Search Brands" />
		</div>
	)
}

export default Search