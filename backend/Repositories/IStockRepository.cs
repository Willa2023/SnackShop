using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface IStockRepository
    {
        Task<IEnumerable<Stock>> GetAllStocksAsync();
        Task<Stock> GetStockBySnackIdAsync(int snackId);
        Task<Stock> AddStockAsync(int snackId, int quantity);

    }
}