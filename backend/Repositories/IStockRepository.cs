using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface IStockRepository
    {
        Task<IEnumerable<Stock>> GetAllStocksAsync();
        Task<Stock> GetStockBySnackIdAsync(int id);
        Task AddStockAsync(int id, int quantity);

    }
}