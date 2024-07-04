import { Snack } from '../Models/Snack';

interface SnackDataGridProps {
  snacks: Snack[];
  setSnacks: React.Dispatch<React.SetStateAction<Snack[]>>;
  loading: boolean;
  error: string | null;
}

const SnackDataGrid: React.FC = () => {
  return <div>Snack Data Grid</div>;
};

export default SnackDataGrid;
