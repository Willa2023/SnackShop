import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Stock } from '../Models/SnackStockSell';
import { getStocks } from '../Services/StockService';
import { getAdvice } from '../Services/OpenAIService';

const AISuggestionPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [questionStock, setQuestionStock] = useState(
    'Analyse the stocks, which snack should I buy more and which buy less?',
  );
  const [answer, setAnswer] = useState('');

  const fetchStocks = async () => {
    try {
      const stocks = await getStocks();
      setStocks(stocks);
    } catch (err) {
      console.error('Failed to fetch stocks, check if server is running.');
    }
  };
  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchAnswerFromOpenAI = async (questionStock: string) => {
    try {
      console.log('Question:', questionStock);
      if (!questionStock.trim()) {
        throw new Error('Question cannot be empty');
      }
      const answer = await getAdvice(questionStock, stocks);
      setAnswer(answer);
      console.log(answer);
    } catch (err) {
      console.error('Failed to fetch answer:', err);
    }
  };

  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Analysis and Suggestion for Stock
        </Typography>
        <TextField
          fullWidth
          placeholder="Ask a question"
          multiline
          rows={3}
          type="text"
          value={questionStock}
          onChange={(e) => setQuestionStock(e.target.value)}
        ></TextField>
        <Button onClick={() => fetchAnswerFromOpenAI(questionStock)}>
          Get the answer
        </Button>
        <TextField
          fullWidth
          multiline
          rows={30}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></TextField>
      </Grid>
    </Grid>
  );
};

export default AISuggestionPage;
