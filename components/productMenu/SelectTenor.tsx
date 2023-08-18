import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function SelectTenor(props) {
const tenorList = [
  { value: "6", label: "6個月" },
  { value: "12", label: "12個月" },
  { value: "18", label: "18個月" },
  { value: "24", label: "24個月" },
  { value: "36", label: "36個月" },
  { value: "48", label: "48個月" },
  { value: "60", label: "60個月" },
  { value: "72", label: "72個月" },
  { value: "82", label: "84個月" },
];
  const [tenor, setTenor] = React.useState('24');

  const handleChange = (event) => {
        const selectedValue = event.target.value;
        setTenor(selectedValue);
		props.onSelectChange(selectedValue);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Tenorlabel">還款期</InputLabel>
        <Select
          labelId="Tenorlabel"
          id="Tenorlabel"
          value={tenor}
          label="還款期"
          onChange={handleChange}
        >
		  {tenorList.map((item, index) => (
			  <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
		  ))}
        </Select>


      
      </FormControl>
    </div>
  );
}//<FormHelperText>With label + helper text</FormHelperText>