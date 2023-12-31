import { Card,  Row, Text, Grid } from '@nextui-org/react';
//import {ProcductMain} from '../ProductMain';
import { useRouter } from 'next/router';
// import {Button, Divider, Input, Text,Card, CardBody} from '@nextui-org/react';
// import Image from 'next/image'
import {Layout} from '../navbar/layout';
import {Footer} from '../footer';
import {Flex} from '../styles/flex';
import {Nav} from '../navbar/navbar';
export const ProcductDetails= () => {
const router = useRouter();
 const list = [
    {
      title: "私人貸款",
      img: "https://nextui.org/images/fruit-1.jpeg",
      price: "$5.50"
    },
    {
      title: "信用卡",
      img: "https://nextui.org/images/fruit-2.jpeg",
      price: "$3.00"
    },
    {
      title: "旅遊保險",
      img: "https://nextui.org/images/fruit-3.jpeg",
      price: "$10.00"
    },
    {
      title: "理財戶口",
      img: "https://nextui.org/images/fruit-4.jpeg",
      price: "$5.30"
    },
    {
      title: "証券戶口",
      img: "https://nextui.org/images/fruit-5.jpeg",
      price: "$15.70"
    },
    {
      title: "推荐獎賞",
      img: "https://nextui.org/images/fruit-6.jpeg",
      price: "$8.00"
    }
  ];
	const handleCardClick = () => {
	  // Assuming you have a route named 'test' with a dynamic parameter 'itemId'
	  router.push(`/ProductMain`);
	};
  return (
  <>
 
     <Grid.Container gap={5} justify="center" >
      {list.map((item, index) => (
        <Grid xs={7} sm={7} lg={7} key={index}>
          <Card isHoverable isPressable  onClick={() => handleCardClick()}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={item.img}
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
	</>
  );
}
