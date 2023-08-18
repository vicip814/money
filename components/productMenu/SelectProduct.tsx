import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectProduct(props) {
const lendType = [
  { value: "私人貸款", label: "私人貸款" },
  { value: "稅務貸款", label: "稅務貸款" },
  { value: "財務公司貸款", label: "財務公司貸款" },
  { value: "銀行貸款", label: "銀行貸款" },
  { value: "結餘轉戶貸款", label: "結餘轉戶貸款" },
  { value: "虛擬銀行貸款", label: "虛擬銀行貸款" },
  { value: "汽車貸款", label: "汽車貸款" },
  { value: "中小企貸款", label: "中小企貸款" },  
];
  const [product, setProduct] = React.useState('私人貸款');

  const handleChange = (event) => {
       const selectedValue = event.target.value;
        setProduct(selectedValue);
		props.onSelectChange(selectedValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Productlabel">選擇貸款種類</InputLabel>
        <Select
          labelId="Productlabel"
          id="Productlabel"
          value={product}
          label="貸款種類"
		
          onChange={handleChange}
        >
		  {lendType.map((item, index) => (
			  <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
		  ))}
        </Select>


      
      </FormControl>
    </div>
  );
}//<FormHelperText>With label + helper text</FormHelperText>