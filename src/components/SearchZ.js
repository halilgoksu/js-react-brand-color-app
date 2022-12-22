import {useContext, useState} from 'react'
import {GrSearch} from 'react-icons/gr';
import MainContext from '../MainContext';


function InputWithMultipleHandlers() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function logValue() {
    console.log(value);
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => handleChange(event) && logValue()}
    />
  );
}
