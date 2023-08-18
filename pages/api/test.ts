import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
	const baseurl = 'https://www.moneysmart.hk/zh-hk/personal-loan';
	const url = new URL(baseurl+req.url);
	// console.log(baseurl+req.url);
	const searchParams = new URLSearchParams(url.search);
	
	const lendType ={
	"私人貸款":"personal-loan",
	"稅務貸款":"tax-loan",
	"財務公司貸款":"lending-companies-loan",
	"銀行貸款":"banks-loan",
	"結餘轉戶貸款":"debt-consolidation-loan",
	"虛擬銀行貸款":"virtual-banks-loan",
	"汽車貸款":"car-loan",
	"中小企貸款":"sme-loan",
	};	
	


	const loanAmount = searchParams.get('loan_amount');
	const loanTenure = searchParams.get('loan_tenure');
	const monthlyIncome = searchParams.get('monthly_income');
	const categorySlug = lendType[searchParams.get('category_slug')];
	const sortBy = "recommended"; //searchParams.get('sort_by');
	const urlStr = 'https://www.moneysmart.hk/zh-hk/' +categorySlug+'?loan_amount='+loanAmount+'&loan_tenure='+loanTenure+'&monthly_income='+monthlyIncome+'&categorySlug='+categorySlug+'&sortBy=recommended';

    console.log(urlStr); 

    await page.goto(urlStr);

    // await page.goto('https://www.moneysmart.hk/zh-hk/personal-loan?loan_amount=1000000&loan_tenure=72&monthly_income=30000&category_slug=personal-loan&sort_by=recommended');

    // Inject jQuery into the page
    await page.addScriptTag({ url: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js' });

    // Click the pagination buttons
    // for (let i = 0; i < 3; i++) {
      // await page.click('#page-wrapper > div > div.container.container--listing > div > div.l-content > div.content > div.listing > div.pagination-button > button');
      // await page.waitForTimeout(1000); 
    // }

    const listings = await page.evaluate(() => {
      const data = [];
      $('#page-wrapper > div > div.container.container--listing > div > div.l-content > div.content > div.listing > div').each(function (index) {
        const productName = $(this).find('div.listing-card__head > div.listing-card__summary > div.listing-card__title-wrapper > a > h2').text();
        const interest_rate = $(this).find('div.listing-card__head > div.listing-card__summary > div.listing-card__content-wrapper > div.listing-card__content > dl > div:nth-child(1) > dd').text();
        const total_amount = $(this).find('div.listing-card__head > div.listing-card__summary > div.listing-card__content-wrapper > div.listing-card__content > dl > div:nth-child(2) > dd').text();
        const total_interest = $(this).find('div.listing-card__head > div.listing-card__summary > div.listing-card__content-wrapper > div.listing-card__content > dl > div:nth-child(3) > dd').text();
        const monthly_payment = $(this).find('div.listing-card__head > div.listing-card__highlights > div.listing-card__rate > div > h4').text();

        data.push({
          productName: productName,
          interest_rate: interest_rate,
          total_amount: total_amount,
          total_interest: total_interest,
          monthly_payment: monthly_payment
        });
      });
      return data;
    });

    await browser.close();

    res.status(200).json(listings);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while scraping the website' });
  }
}