import { Card,  Row, Text, Grid } from '@nextui-org/react';
// import {Button, Divider, Input, Text,Card, CardBody} from '@nextui-org/react';
// import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
export const ProductMenu = () =>{
	const router = useRouter();
	const handleCardClick = (itemId) => {
	  // Assuming you have a route named 'test' with a dynamic parameter 'itemId'
	  router.push(`/productMain`);
	};

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
  return (
     <Grid.Container gap={5} justify="center"   sx={{
    marginTop: '50px',
    paddingBottom: '20px',
    paddingLeft: '30px',
    paddingRight: '40px',
  }}>
      {list.map((item, index) => (
        <Grid xs={3} sm={3} lg={2} key={index}>
          <Card isHoverable isPressable width="100%"  onClick={() => handleCardClick()}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={item.img}
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
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
  );
}
