import { Button, Grid, Input, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockDataGrid from '../Components/Forms/StockDataGrid';
import { Stock } from '../Models/SnackStockSell';
import { createStock, getStocks } from '../Services/StockService';
import AddStockForm from '../Components/Forms/AddStockForm';
import StockProfit from '../Components/Charts/StockProfit';
import StockRevenueCost from '../Components/Charts/StockRevenueCost';
import StockSellPie from '../Components/Charts/StockSellPie';
import { getAdvice } from '../Services/OpenAIService';

const StockPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [question, setQuestion] = useState('');
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

  const handleAddStock = async (snackId: number, quantity: number) => {
    try {
      await createStock(snackId, quantity);
      const newStocks = await getStocks();
      setStocks(newStocks);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Failed to add stock');
    }
  };
  const fetchAnswerFromOpenAI = async (question: string) => {
    try {
      const answer = await getAdvice(question);
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
          Stock List
        </Typography>
      </Grid>
      {/* test openai */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          placeholder="Ask a question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></TextField>
        <Button onClick={() => fetchAnswerFromOpenAI(question)}>
          Get the answer
        </Button>
        <TextField
          fullWidth
          multiline
          rows={4}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></TextField>
      </Grid>
      {/* test openai */}
      <Grid item display="flex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Stock
        </Button>
      </Grid>
      <Grid item xs={12}>
        <StockDataGrid stocks={stocks} />
        <AddStockForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddStock={handleAddStock}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="row"
        spacing={2}
        columnGap={1}
      >
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
            Total Revenue & Cost
          </Typography>
          <StockRevenueCost stocks={stocks} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
            Profit By SnackID
          </Typography>
          <StockProfit stocks={stocks} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Sell Quantity
        </Typography>
        <StockSellPie stocks={stocks} />
      </Grid>
    </Grid>
  );
};

export default StockPage;
