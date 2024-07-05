import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Snack } from '../Models/Snack';

interface SnackDataGridProps {
  snacks: Snack[];
  setSnacks: React.Dispatch<React.SetStateAction<Snack[]>>;
  loading: boolean;
  error: string | null;
}

const SnackDataGrid: React.FC<SnackDataGridProps> = ({
  snacks,
  setSnacks,
  loading,
  error,
}) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'costPrice', headerName: 'Cost Price', width: 110 },
    { field: 'sellPrice', headerName: 'Sell Price', width: 110 },
    { field: 'brand', headerName: 'brand', width: 230 },
  ];
  const rows: GridRowsProp = snacks.map((snack) => ({
    id: snack.snackId,
    name: snack.name,
    costPrice: snack.costPrice,
    sellPrice: snack.sellPrice,
    brand: snack.brand,
  }));

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        pagination
        paginationMode="client"
        loading={loading}
        autoHeight
      ></DataGrid>
    </div>
  );
};

export default SnackDataGrid;
