import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stock } from '../../Models/SnackStockSell';
import StockChart from '../Charts/StockChart';

interface StockDataGridProps {
  stocks: Stock[];
}

const StockDataGrid: React.FC<StockDataGridProps> = ({ stocks }) => {
  const columns: GridColDef[] = [
    {
      field: 'snackName',
      headerName: 'Snack Name',
      width: 200,
      editable: false,
    },
    { field: 'snackId', headerName: 'Snack ID', width: 110, editable: false },
    {
      field: 'currentStock',
      headerName: 'Current Stock',
      width: 150,
      editable: false,
    },
    {
      field: 'sellQuantity',
      headerName: 'Sell Quantity',
      width: 150,
      editable: false,
    },
    {
      field: 'totalStock',
      headerName: 'Total Stock',
      width: 150,
      editable: true,
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
      <StockChart rows={rows} />
    </>
  );
};

export default StockDataGrid;
