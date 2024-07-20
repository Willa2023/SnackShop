import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Sell } from '../../Models/SnackStockSell';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SellDataGridProps {
  sells: Sell[];
}

const SellDataGrid: React.FC<SellDataGridProps> = ({ sells }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: !isSmallScreen,
    snackId: !isSmallScreen,
    quantity: !isSmallScreen,
    revenue: !isSmallScreen,
  });

  useEffect(() => {
    setColumnVisibilityModel({
      id: !isSmallScreen,
      snackId: !isSmallScreen,
      quantity: !isSmallScreen,
      revenue: !isSmallScreen,
    });
  }, [isSmallScreen]);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
    },
    {
      field: 'snackName',
      headerName: 'Snack Name',
      maxWidth: isSmallScreen ? 150 : 1000,
      flex: 1,
    },
    {
      field: 'snackId',
      headerName: 'Snack ID',
      flex: 0.5,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      maxWidth: isSmallScreen ? 80 : 1000,
      flex: 0.5,
    },
    {
      field: 'date',
      headerName: 'Date',
      maxWidth: isSmallScreen ? 100 : 1000,
      minWidth: 100,
      flex: 0.8,
    },
    {
      field: 'revenue',
      headerName: 'Revenue',
      maxWidth: isSmallScreen ? 100 : 1000,
      flex: 0.5,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      maxWidth: isSmallScreen ? 100 : 1000,
      minWidth: 70,
      flex: 0.5,
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
      autoHeight
      disableColumnMenu
      sx={{
        '& .MuiDataGrid-columnHeader': {
          // typography: isSmallScreen ? '0.2rem' : '1.1rem',
          fontSize: isSmallScreen ? '0.8rem' : '1.0rem',
        },
        '& .MuiDataGrid-cell': {
          fontSize: isSmallScreen ? '0.75rem' : '0.9rem',
        },
        '& .MuiDataGrid-root': {
          overflowX: 'auto',
        },
      }}
    ></DataGrid>
  );
};

export default SellDataGrid;
