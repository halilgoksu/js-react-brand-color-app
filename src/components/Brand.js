import {useContext, useState} from 'react'
import {getContrastYIQ} from '../helpers';
import MainContext from '../MainContext';
import ClipboardButton from 'react-clipboard.js';

function Brand({brand}) {

	const {selectedBrands, setSelectedBrands, setCopied} = useContext(MainContext)

	const toggleSelected = () => {
		if (selectedBrands.includes(brand.slug)) {
			setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
		} else {
			setSelectedBrands([...selectedBrands, brand.slug])
		}
	}

	const setColor = (color) => {
		setCopied(color)
	}

	return (
		<div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
			{/* brand da selected varda selected degilde tikladigimizda genislemeye yarar '' */}
			<h5 onClick={toggleSelected}>{brand.title}</h5>
			<div className="brand-colors">
				{brand.colors.map((color, key) => (
					<ClipboardButton key={key} data-clipboard-text={color} onSuccess={() => setColor(color)}
					                 component="span"
					                 style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
									{/* datadan cektigi kodlarin colorcode,
									 kendi bakgroud a da gelen kodu sass ile verdik  
									 her kod  farkli renk alidi  
									 -getContrastYIQ texti bakgrounda gore ayarlar import ettik 
									 */}
						{color}
					</ClipboardButton>
				))}
			</div>
		</div>
	)
}

export default Brand