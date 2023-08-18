import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'listings.csv');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rows = fileContent.split('\n').slice(1); // Exclude header row
    const csvData = rows.map((row) => {
      const [productName, interest_rate, total_amount, total_interest, monthly_payment] = row.split(',');
      return {
        productName,
        interest_rate,
        total_amount,
        total_interest,
        monthly_payment,
      };
    });

    res.status(200).json(csvData);
  } catch (error) {
    console.error('Error reading CSV file:', error);
    res.status(500).json({ error: 'Failed to read CSV file' });
  }
}