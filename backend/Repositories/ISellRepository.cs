using backend.Models;

namespace backend.Repositories
{
    public interface ISellRepository
    {
        Task AddSellAsync(Sell sell);
    }
}