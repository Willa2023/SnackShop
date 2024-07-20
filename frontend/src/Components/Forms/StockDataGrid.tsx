import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stock } from '../../Models/SnackStockSell';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

interface StockDataGridProps {
  stocks: Stock[];
}

const StockDataGrid: React.FC<StockDataGridProps> = ({ stocks }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    snackId: !isSmallScreen,
    sellQuantity: !isSmallScreen,
    totalStock: !isSmallScreen,
    totalCost: !isSmallScreen,
    totalSell: !isSmallScreen,
    currentSellProfit: !isSmallScreen,
  });

  useEffect(() => {
    setColumnVisibilityModel({
      snackId: !isSmallScreen,
      sellQuantity: !isSmallScreen,
      totalStock: !isSmallScreen,
      totalCost: !isSmallScreen,
      totalSell: !isSmallScreen,
      currentSellProfit: !isSmallScreen,
    });
  }, [isSmallScreen]);

  const columns: GridColDef[] = [
    {
      field: 'snackName',
      headerName: 'Snack Name',
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: 'snackId',
      headerName: 'Snack ID',
      width: 110,
      flex: 0.5,
    },
    {
      field: 'currentStock',
      headerName: 'Stock',
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: 'sellQuantity',
      headerName: 'Sell Quantity',
      width: 150,
      flex: 0.5,
    },
    {
      field: 'totalStock',
      headerName: 'Total Stock',
      width: 150,
      flex: 0.5,
    },
    {
      field: 'totalCost',
      headerName: 'Cost',
      width: 150,
      flex: 0.5,
    },
    {
      field: 'totalSell',
      headerName: 'Sell',
      width: 150,
      flex: 0.5,
    },
    {
      field: 'totalProfit',
      headerName: 'Profit',
      width: 80,
      flex: 0.5,
    },
    {
      field: 'currentSellProfit',
      headerName: 'Current Sell Profit',
      minWidth: 200,
      flex: 1,
    },
  ];

  const rows: GridRowsProp = stocks.map((stock) => ({
    id: stock.id,
    snackName: stock.snack.name,
    snackId: stock.snackId,
    currentStock: stock.currentStock,
    sellQuantity: stock.soldQuantity,
    totalStock: stock.totalStock,
    totalCost: stock.totalCost,
    totalSell: stock.totalSell,
    totalProfit: stock.totalProfit,
    currentSellProfit: (
      stock.totalSell -
      stock.soldQuantity * stock.snack.costPrice
    ).toFixed(2),
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
    ></DataGrid>
  );
};

export default StockDataGrid;
