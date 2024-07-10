import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stock } from '../../Models/SnackStockSell';

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
  ];

  const rows: GridRowsProp = stocks.map((stock) => ({
    id: stock.id,
    snackName: stock.snack.name,
    snackId: stock.snackId,
    currentStock: stock.currentStock,
    sellQuantity: stock.soldQuantity,
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
    </>
  );
};

export default StockDataGrid;
