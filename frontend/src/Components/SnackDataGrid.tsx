import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Snack } from '../Models/Snack';

interface SnackDataGridProps {
  snacks: Snack[];
  setSnacks: React.Dispatch<React.SetStateAction<Snack[]>>;
  loading: boolean;
  error: string | null;
}

const columns: GridColDef[] = [
  { field: 'snackId', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'brand', headerName: 'brand', width: 150 },
  { field: 'costPrice', headerName: 'Cost Price', width: 110 },
  { field: 'sellPrice', headerName: 'Sell Price', width: 110 },
  { field: 'description', headerName: 'Description', width: 230 },
];

const rows = [
  {
    id: 1,
    snackId: 1,
    name: 'Cheetos',
    brand: 'Frito-Lay',
    costPrice: 1.5,
    sellPrice: 2.5,
    description: 'Cheese Puffs',
  },
  {
    id: 2,
    snackId: 2,
    name: 'Doritos',
    brand: 'Matutano',
    costPrice: 1.5,
    sellPrice: 2.5,
    description: 'Nacho Cheese',
  },
  {
    id: 3,
    snackId: 3,
    name: 'Lays',
    brand: 'PepsiCo',
    costPrice: 1.5,
    sellPrice: 2.5,
    description: 'Classic',
  },
  {
    id: 4,
    snackId: 4,
    name: 'Fritos',
    brand: 'Lays',
    costPrice: 1.5,
    sellPrice: 2.5,
    description: 'Original',
  },
  {
    id: 5,
    snackId: 5,
    name: 'Ruffles',
    brand: 'Sabritas',
    costPrice: 1.5,
    sellPrice: 2.5,
    description: 'Sour Cream & Onion',
  },
];

const SnackDataGrid: React.FC = () => {
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </div>
  );
};

export default SnackDataGrid;
