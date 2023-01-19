import {useState} from 'react'
import {getContrastYIQ} from '../helpers';

function Copied({ color }) {
	return (
		<div className="copied" style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
			Copied #{color} to Clipboard
			cons
		</div>
	)
}

export default Copied