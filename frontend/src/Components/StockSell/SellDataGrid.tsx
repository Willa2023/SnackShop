import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Sell } from '../../Models/SnackStockSell';

interface SellDataGridProps {
  sells: Sell[];
}

const SellDataGrid: React.FC<SellDataGridProps> = ({ sells }) => {
  const columns: GridColDef[] = [
    {
      field: 'snackName',
      headerName: 'Snack Name',
      width: 150,
      editable: false,
    },
    { field: 'snackId', headerName: 'Snack ID', width: 110, editable: false },
    {
      field: 'quantity',
      headerName: 'Sell Quantity',
      width: 110,
      editable: false,
    },
    {
      field: 'date',
      headerName: 'Sell Date',
      width: 110,
      editable: false,
    },
    {
      field: 'revenue',
      headerName: 'Revenue',
      width: 110,
      editable: false,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      width: 110,
      editable: false,
    },
  ];

  const rows: GridRowsProp = sells.map((sell) => ({
    id: sell.id,
    snackId: sell.snackId,
    snackName: sell.snack.name,
    quantity: sell.quantity,
    date: sell.date,
    revenue: sell.totalPrice,
    profit: sell.profit,
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

export default SellDataGrid;
