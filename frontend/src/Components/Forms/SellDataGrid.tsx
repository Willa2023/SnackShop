import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Sell } from '../../Models/SnackStockSell';
import SellChart from '../Charts/SellHistory';
import { Grid, useMediaQuery } from '@mui/material';
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
  });

  useEffect(() => {
    setColumnVisibilityModel({
      id: !isSmallScreen,
      snackId: !isSmallScreen,
      quantity: !isSmallScreen,
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
      flex: 1,
    },
    {
      field: 'revenue',
      headerName: 'revenue',
      maxWidth: isSmallScreen ? 100 : 1000,
      flex: 1,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      maxWidth: isSmallScreen ? 100 : 1000,
      flex: 1,
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
    <Grid container>
      <Grid item xs={12} sx={{ overflowX: 'auto' }}>
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
          sx={{
            '& .MuiDataGrid-columnHeader': {
              fontSize: isSmallScreen ? '0.9rem' : '1.1rem',
            },
            '& .MuiDataGrid-cell': {
              fontSize: isSmallScreen ? '0.75rem' : '0.9rem',
            },
          }}
        ></DataGrid>
      </Grid>
      {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <SellChart rows={rows} />
      </Grid> */}
    </Grid>
  );
};

export default SellDataGrid;
