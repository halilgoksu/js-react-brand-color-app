import {useState} from 'react'
import {getContrastYIQ} from '../helpers';

function Copied({ color }) {
	console.log(color)
	return (
		<div className="copied" style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
			Copied #{color} to Clipboard
			
		</div>
	)
}

export default Copied