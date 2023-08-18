import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>私人貸款(P loan)產品比較概覽</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >



               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} >
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        市場上有哪些私人貸款產品或種類？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
於我們網站，你除了可以搜尋和比較傳統貸款之外，在稅季亦可找到稅務貸款（稅貸）、亦可選擇年利率較相宜的低息貸款或買車前必備的汽車貸款（車貸）。

                     </Text>
                  </Flex></Flex>


               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        有甚麼借貸方式可供選擇？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
香港的貸款主要分為私人分期貸款、稅務貸款、結餘轉戶、循環貸款、中小企貸款、業主貸款﹑財務公司貸款﹑汽車貸款﹑銀行貸款﹑小額貸款、虛擬銀行貸款等。貸款人可按照自己的需要選擇不同的貸款類型，例如個人信貸評分及紀錄欠佳的人士可考慮審核相對寬鬆的易批私人貸款 (Low TU Loan)。

舉例來說，私人分期貸款的産品特性是覆蓋範圍廣、如你沒有特定的貸款目的，例如繳付稅項（稅貸）、 清卡數（結餘轉戶）、購買汽車（車貸）、急需現金周轉（易批貸款），則可考慮金額及還款期較彈性及較多選擇的私人分期貸款；而稅務貸款則可助你在稅季一筆過還清稅項，對於入息較高的人士而言，能減輕稅季的財務負擔；另外，財務公司貸款的申請門檻通常比銀行低但借貸額不比其他貸款低，因此適合信貸評級欠佳但需要資金周轉之人士。

                     </Text>
                  </Flex></Flex>	
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        選擇私人貸款產品時應考慮的因素
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
借貸前，貸款人可按財務規劃、所需資金金額、還款預算、還款期、實際年利率、信貸紀錄、批核時間等多個因素，在MoneyHero網站比較後選擇合適你的私人貸款產品；經本網申請指定產品更可獲現金回贈，變相減低你的還款額，按此查看熱門貸款產品。
                     </Text>
                  </Flex></Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        選擇私人貸款產品時應考慮的因素銀行借貸/ 借貸公司貸款條件
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
借貸時，銀行或借貸機構多數會依照以下最低條件來決定借貸人的申請資格：
i) 必須年滿18歲
ii) 必須為香港永久居民

而不同銀行/ 借貸公司的要求會有少許差異，例如渣打銀行要求私人貸款或結餘轉戶申請者必須至少年滿20歲，及每年固定收入達HK$60,000或以上。亦有部份借貸機構會接受非香港永久居民申請，但申請者必需提交香港身份證/護照副本和近3個月内的住址證明。

以下是部分銀行借貸/ 借貸公司申請門檻比較（只供參考）：
Citi 稅季貸款：年薪HK$72,000
渣打「分期貸款」：年薪HK$60,000及年滿20歲
DBS定額私人貸款︰年薪HK$80,000
WeLab Bank私人分期貸款︰年薪HK$120,000
Mox「即時借」：年滿18歲、為香港永久居民
中信$mart Plus分期貸款：年薪HK$84,000
富邦「EZ Cash」私人貸款：年薪HK$60,000
東亞銀行 「勁快」分期貸款：年薪HK$60,000
                     </Text>
                  </Flex></Flex>				  
				  
</Flex></Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
