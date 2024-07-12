import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Sell } from '../../Models/SnackStockSell';
import SellChart from '../Charts/SellChart';

interface SellDataGridProps {
  sells: Sell[];
}

const SellDataGrid: React.FC<SellDataGridProps> = ({ sells }) => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      editable: false,
    },
    {
      field: 'snackName',
      headerName: 'Snack Name',
      width: 200,
      editable: false,
    },
    {
      field: 'quantity',
      headerName: 'Sell Quantity',
      width: 150,
      editable: false,
    },
    {
      field: 'date',
      headerName: 'Sell Date',
      width: 150,
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
      <SellChart rows={rows} />
    </>
  );
};

export default SellDataGrid;
