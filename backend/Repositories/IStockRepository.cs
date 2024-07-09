using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface IStockRepository
    {
        Task AddStockAsync(Stock stock);
        // Task<IEnumerable<Stock>> GetAllStocksAsync();
        // Task<Stock> GetStockBySnackIdAsync(int id);
        // Task UpdateStockAsync(Stock stock);
        // Task DeleteStockAsync(int id);
        // Task<bool> StockExistsAsync(int id);
        // Task BulkAddStocksAsync(IEnumerable<Stock> stock);

    }
}