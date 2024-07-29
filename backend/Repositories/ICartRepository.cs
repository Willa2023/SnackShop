using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface ICartRepository
    {
        Task CreateCartAsync(Cart cart);
    }
}