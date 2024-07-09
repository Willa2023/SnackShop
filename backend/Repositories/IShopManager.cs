using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface IShopManager
    {

        Task AddStockAsync(Stock stock);
        Task AddSellAsync(Sell sell);

        // Task<IEnumerable<Stock>> GetAllStocksAsync();
        // Task<Stock> GetStockBySnackIdAsync(int id);
        // Task UpdateStockAsync(Stock stock);
        // Task DeleteStockAsync(int id);
        // Task<bool> StockExistsAsync(int id);
        // Task BulkAddStocksAsync(IEnumerable<Stock> stock);

    }
}