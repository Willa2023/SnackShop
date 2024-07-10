import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowModel,
  GridRowsProp,
} from '@mui/x-data-grid';

const StockSellDataGrid: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, editable: false },
    { field: 'snackId', headerName: 'Snack ID', width: 90, editable: false },
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
      editable: false,
    },
  ];
  const rows: GridRowsProp = [
    {
      id: 1,
      snackId: 1,
      currentStock: 10,
      sellQuantity: 20,
      totalStock: 30,
    },
    {
      id: 2,
      snackId: 2,
      currentStock: 15,
      sellQuantity: 5,
      totalStock: 20,
    },
    {
      id: 3,
      snackId: 3,
      currentStock: 30,
      sellQuantity: 10,
      totalStock: 50,
    },
  ];

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

export default StockSellDataGrid;
