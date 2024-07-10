import { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stock } from '../../Models/SnackStockSell';
import { BarChart } from '@mui/x-charts/BarChart';
// import { Bar } from 'react-chartjs-2';

interface StockDataGridProps {
  stocks: Stock[];
}

const StockDataGrid: React.FC<StockDataGridProps> = ({ stocks }) => {
  const columns: GridColDef[] = [
    {
      field: 'snackName',
      headerName: 'Snack Name',
      width: 150,
      editable: false,
    },
    { field: 'snackId', headerName: 'Snack ID', width: 110, editable: false },
    {
      field: 'currentStock',
      headerName: 'Current Stock',
      width: 110,
      editable: false,
    },
    {
      field: 'sellQuantity',
      headerName: 'Sell Quantity',
      width: 110,
      editable: false,
    },
    {
      field: 'totalStock',
      headerName: 'Total Stock',
      width: 110,
      editable: false,
    },
    {
      field: 'totalCost',
      headerName: 'Total Cost',
      width: 110,
      editable: false,
    },
    {
      field: 'totalSell',
      headerName: 'Total Sell',
      width: 110,
      editable: false,
    },
    {
      field: 'totalProfit',
      headerName: 'Total Profit',
      width: 110,
      editable: false,
    },
  ];

  const rows: GridRowsProp = stocks.map((stock) => ({
    id: stock.id,
    snackName: stock.snack.name,
    snackId: stock.snackId,
    currentStock: stock.currentStock,
    sellQuantity: stock.soldQuantity,
    totalStock: stock.totalStock,
    totalCost: stock.totalCost,
    totalSell: stock.totalSell,
    totalProfit: stock.totalProfit,
  }));

  const [chartData, setChartData] = useState<any>({
    xAxis: [],
    series: [],
  });
  useEffect(() => {
    // Prepare xAxis (labels) and series (data)
    const labels = rows.map((row) => row.snackName);
    const costData = rows.map((row) => row.totalCost);
    const sellData = rows.map((row) => row.totalSell);

    setChartData({
      xAxis: [{ scaleType: 'band', data: labels }],
      series: [
        { data: costData, label: 'Cost' },
        { data: sellData, label: 'Sell' },
      ],
    });
  }, [rows]);

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        pagination
        paginationMode="client"
        autoHeight
      ></DataGrid>
      <div style={{ marginTop: '20px' }}>
        <BarChart
          xAxis={chartData.xAxis}
          series={chartData.series}
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export default StockDataGrid;
