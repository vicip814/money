import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      '私人貸款比較',
      '信用卡比較',
      '保險比較',
      '按揭比較',
      '證券戶口比較',
	  '理財戶口比較',
	  'BLOG',
	  '下載 App',
	  '獎賞換領',
   ];
   
   const ploanItems = [
	'所有私人貸款',
	'熱門貸款',
	'稅務貸款',
	'私人分期貸款',
	'結餘轉戶 (清卡數貸款)',
	'銀行貸款',
	'財務公司貸款',
	'業主貸款',
	'虛擬銀行貸款',
	'特快貸款',
	'小額貸款',
	'循環貸款',
	'汽車貸款',
	'企業貸款',
	'易批貸款',
	'免露面貸款'
   ];   
   
   const creditCardItems =[
	'所有信用卡',
	'熱門信用卡',
	'現金回贈信用卡',
	'里數信用卡',
	'信用卡迎新禮品',
	'機場貴賓室信用卡',
	'銀聯信用卡',
	'低門檻/學生信用卡',
	'電子錢包信用卡',
	'Visa信用卡',
	'餐飲信用卡',
	'網購信用卡',
	'八達通自動增值信用卡',
	'尊尚信用卡',
	'萬事達卡',
	'公司信用卡'   
	];
	
	const bankItems=[
		'所有銀行戶口',
		'熱門銀行戶口',
		'尊尚銀行戶口',
		'定期存款',
		'電子錢包'
	];
   
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
			<Link href="/">
            <Text b color="inherit" hideIn="xs">
               LOGO
            </Text>
			</Link> 
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        私人貸款比較
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="私人貸款比較"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     {ploanItems.map((item,index)=>(
                     <Dropdown.Item
                        key={item}
                        icon={icons.user}
                     >
					{item}
					</Dropdown.Item>
					))}				 
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        信用卡比較
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="信用卡比較"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     {creditCardItems.map((item,index)=>(
                     <Dropdown.Item
                        key={item}
                        icon={icons.user}
                     >
					{item}
					</Dropdown.Item>
					))}				 
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        理財戶口比較
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="理財戶口比較"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     {bankItems.map((item,index)=>(
                     <Dropdown.Item
                        key={item}
                        icon={icons.user}
                     >
					{item}
					</Dropdown.Item>
					))}				 
                  </Dropdown.Menu>
               </Dropdown>			   

               <Navbar.Link href="/api/test">保險比較</Navbar.Link>
               <Navbar.Link href="/api/test">按揭比較</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="/api/productdata"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <ModalLogin />

            <Navbar.Item>
               <Button auto flat href="#">
                  註冊
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
