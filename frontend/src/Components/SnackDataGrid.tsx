import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Snack } from '../Models/Snack';
import { deleteSnack, updateSnack } from '../Services/SnackService';

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
  const handleEdit = async (newRow: GridRowModel) => {
    const updatedSnack: Snack = {
      ...newRow,
      snackId: newRow.id,
    } as Snack;
    try {
      await updateSnack(updatedSnack);
      const newSnacks = snacks.map((snack) =>
        snack.snackId === updatedSnack.snackId ? updatedSnack : snack,
      );
      setSnacks(newSnacks);
      return updatedSnack;
    } catch (err) {
      console.error('Failed to update snack');
      return newRow;
    }
  };

  const handleDelete = async (snackId: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (!confirmDelete) return;
    try {
      await deleteSnack(snackId);
      setSnacks((prev) => prev.filter((snack) => snack.snackId !== snackId));
    } catch (err) {
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, editable: false },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    {
      field: 'costPrice',
      headerName: 'Cost Price',
      width: 110,
      editable: true,
    },
    {
      field: 'sellPrice',
      headerName: 'Sell Price',
      width: 110,
      editable: true,
    },
    { field: 'brand', headerName: 'Brand', width: 110, editable: true },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
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
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
      )}
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
        processRowUpdate={handleEdit}
      ></DataGrid>
    </div>
  );
};

export default SnackDataGrid;
