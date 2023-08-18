import React from 'react';
import {Button, Divider, Input, Text,Card} from '@nextui-org/react';
// import {} from "@nextui-org/react";

import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
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
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               > 
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
              
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     訂閱電子報，緊貼理財貼士、搶先得知獨家優惠資訊。
                  </Text>
               </Box>
 

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="請輸入電郵地址" size="lg" />
                  <Button>訂閱</Button>
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >

                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> 隨時取消訂閱
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >

            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
// export default Hero;