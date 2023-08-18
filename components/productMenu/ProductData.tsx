import { useEffect, useState } from 'react';
import { Card, Grid, Text } from '@nextui-org/react';// Replace 'your-ui-library' with your actual UI library
import {Button} from "@nextui-org/react";
const ProductData = (props ) => {
  // const [csvData, setCsvData] = useState([]);
  // console.log(props.shouldRender);
  // console.log(props.loanAmount);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
   console.log(`/api/test?loan_amount=${props.loanAmount}&monthly_income=${props.monthlyIncome}&loan_tenure=${props.tenors}&category_slug=${props.product}&sort_by=recommended`); 
   
    fetch(`/api/test?loan_amount=${props.loanAmount}&monthly_income=${props.monthlyIncome}&loan_tenure=${props.tenors}&category_slug=${props.product}&sort_by=recommended`)
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, [props.shouldRender]);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  // Render your component using the `jsonData`
  //return <div>{JSON.stringify(jsonData)}</div>;
// };
  return (
    <Grid.Container gap={5} justify="center">
      {jsonData && jsonData.map((item, index) => (
        <Grid xs={12} sm={6} md={6} lg={6} key={index}>
          <Card>
            <Card.Body>
              <Text>{item.productName}</Text>
              <Text>實際年利率 : {item.interest_rate}</Text>
              <Text>應付總額 : {item.total_amount}</Text>
              <Text>應付利息總額 : {item.total_interest}</Text>
              <Text>每月還款額 : {item.monthly_payment}</Text>
			  <Button color="primary"  >
				立即申請
			  </Button>			  
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ProductData;