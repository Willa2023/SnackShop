import config from '../Config';
import { Stock } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { openai: openaiApiUrl } = apiUrl;

// const question = 'What is the capital of New Zealand?';
export const getAdvice = async (
  question: string,
  stocks: Stock[],
): Promise<string> => {
  const simplifiedStocks = stocks.map((stock) => ({
    id: stock.id,
    snackId: stock.snackId,
    totalStock: stock.totalStock,
    currentStock: stock.currentStock,
    soldQuantity: stock.soldQuantity,
  }));

  const requestBody = { question, stocks: simplifiedStocks };
  console.log('Request body:', JSON.stringify(requestBody));

  const response = await fetch('http://localhost:5136/api/OpenAI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  console.log('Response status:', response.status);
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error('Failed to fetch from OpenAI');
  }
  const data = await response.text();
  return data;
};
