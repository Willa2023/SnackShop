import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Snack } from '../../Models/SnackStockSellCart';
import { deleteSnack, updateSnack } from '../../Services/SnackService';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSnacks } from '../../Contexts/SnacksContext';

const SnackDataGrid: React.FC = () => {
  const { snacks, setSnacks } = useSnacks();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: !isSmallScreen,
    brand: !isSmallScreen,
    image: !isSmallScreen,
    delete: !isSmallScreen,
  });

  useEffect(() => {
    setColumnVisibilityModel({
      id: !isSmallScreen,
      brand: !isSmallScreen,
      image: !isSmallScreen,
      delete: !isSmallScreen,
    });
  }, [isSmallScreen]);

  const handleEdit = async (newRow: GridRowModel) => {
    const updatedSnack: Snack = {
      ...newRow,
      id: newRow.id,
    } as Snack;
    try {
      await updateSnack(updatedSnack);
      const newSnacks = snacks.map((snack) =>
        snack.id === updatedSnack.id ? updatedSnack : snack,
      );
      setSnacks(newSnacks);
      return updatedSnack;
    } catch (err) {
      console.error('Failed to update snack');
      return newRow;
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (!confirmDelete) return;
    try {
      await deleteSnack(id);
      setSnacks((prev) => prev.filter((snack) => snack.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, flex: 0.5 },
    { field: 'name', headerName: 'Name', width: 200, editable: true, flex: 1 },
    {
      field: 'costPrice',
      headerName: 'Cost Price',
      width: 110,
      editable: true,
      flex: 1,
    },
    {
      field: 'sellPrice',
      headerName: 'Sell Price',
      width: 110,
      editable: true,
      flex: 1,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      editable: true,
      flex: 1,
    },
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
    id: snack.id,
    name: snack.name,
    costPrice: snack.costPrice,
    sellPrice: snack.sellPrice,
    brand: snack.brand,
    image: snack.image,
  }));

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        pagination
        paginationMode="client"
        disableColumnMenu={isSmallScreen}
        autoHeight
        sx={{
          '& .MuiDataGrid-columnHeader': {
            fontSize: isSmallScreen ? '0.75rem' : '0.9rem',
          },
          '& .MuiDataGrid-cell': {
            fontSize: isSmallScreen ? '0.75rem' : '0.9rem',
          },
          '& .MuiDataGrid-root': {
            overflowX: 'auto',
          },
        }}
        processRowUpdate={handleEdit}
      ></DataGrid>
    </div>
  );
};

export default SnackDataGrid;
