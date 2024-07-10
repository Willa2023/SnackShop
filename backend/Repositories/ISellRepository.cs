using backend.Models;

namespace backend.Repositories
{
    public interface ISellRepository
    {
        Task<IEnumerable<Sell>> GetAllSellsAsync();
        Task<Sell> GetSellBySnackIdAsync(int id);
        Task<Sell> AddSellAsync(int id, int quantity);
    }
}