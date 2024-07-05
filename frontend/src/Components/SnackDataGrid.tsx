import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Snack } from '../Models/Snack';
import { deleteSnack } from '../Services/SnackService';

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
  const handleDelete = async (snackId: number) => {
    console.log(`Attempting to delete snack with ID: ${snackId}`);
    try {
      await deleteSnack(snackId);
      setSnacks((prev) => {
        const updatedSnacks = prev.filter((snack) => snack.snackId !== snackId);
        console.log(`Updated snacks list:`, updatedSnacks);
        return updatedSnacks;
      });
      console.log(`Snack with ID: ${snackId} deleted successfully`);
    } catch (err) {
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'costPrice', headerName: 'Cost Price', width: 110 },
    { field: 'sellPrice', headerName: 'Sell Price', width: 110 },
    { field: 'brand', headerName: 'brand', width: 230 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteIcon style={{ color: 'red' }} />}
          label="Delete"
          onClick={() => handleDelete(params.row.id)}
        />
      ),
    },
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
