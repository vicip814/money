import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import Select from "react-select";
//import { Card,  Row, Text, Grid } from '@nextui-org/react';
//import Stack from '@mui/material/Stack';
import {Flex} from '../styles/flex';
import SelectTenor from './SelectTenor';
import SelectProduct from './SelectProduct';
import {Button} from "@nextui-org/react";
import ProductData from './ProductData';
export const ProcductMain: NextPage = () => {


const tenor = [
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
const handleSubmit = (event: SelectChangeEvent) => {
	 setButtonClicked(buttonClicked+1);
     // console.log('Loan Amount:', loanAmount);
    // console.log('Monthly Income:', monthlyIncome);
	 // console.log('Monthly Income:', tenors);
	 // console.log('Monthly Income:', product);
	 // console.log('buttonClicked:', buttonClicked);
};

  const [loanAmount, setLoanAmount] = useState(300000);
  const [monthlyIncome, setMonthlyIncome] = useState(20000);
  const [tenors, setTenors] = useState(24);
  const [product, setProduct] = useState('私人貸款');
  const [buttonClicked, setButtonClicked] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleMonthlyIncomeChange = (event) => {
    setMonthlyIncome(event.target.value);
  };

const ProductList = () => <Select options={lendType} label="ABC" />;

 const handleSelectProductChange = (selectedProduct) => {
    setProduct(selectedProduct);
    // console.log('Selected Product:', selectedProduct);
    // Additional logic or actions with the selected product value
  };

 const handleSelectTenor = (selectedTenor) => {
    setTenors(selectedTenor);
    // console.log('Selected Product:', selectedTenor);
    // Additional logic or actions with the selected product value
  };
  
   return (
    <>
         <Flex
            css={{
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >   
 
      <Input
        type="amount"
        label="貸款額"
        placeholder="HKD$"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
	  <SelectTenor onSelectChange={handleSelectTenor}/>
      <Input
        type="income"
        label="每月收入"
        placeholder="HKD$"
        value={monthlyIncome}
        onChange={handleMonthlyIncomeChange}
      />
	  <SelectProduct onSelectChange={handleSelectProductChange}/>
	  <Button color="primary" onPress={handleSubmit}>
		報價分析
	  </Button>
	 
	</Flex>
      <ProductData
        loanAmount={loanAmount}
        monthlyIncome={monthlyIncome}
        tenors={tenors}
        product={product}
        shouldRender={buttonClicked}
      />
	</>
   );
};

//loanAmount={loanAmount} monthlyIncome={monthlyIncome} tenors={tenors} product={product}

