import { Card,  Row, Text, Grid } from '@nextui-org/react';
import {ProcductMain} from '../components/productMenu/ProcductMain';
import {ProcductDetails} from '../components/productMenu/ProductDetails';
// import {Button, Divider, Input, Text,Card, CardBody} from '@nextui-org/react';
// import Image from 'next/image'
import {Layout} from '../components/navbar/layout';
import {Footer} from '../components/footer';
import {Nav} from '../components/navbar/navbar';
export default function Test() {

  return (
	<>
		<Layout>
			<Nav />
			<ProcductMain />
			<ProcductDetails />
			<Footer />
		</Layout>
	</>
  );
}
