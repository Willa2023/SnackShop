using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface ICartRepository
    {
        Task AddCartAsync(Cart cart);
        Task UpdateCartAsync(Cart cart);
        Task<Cart?> GetCartByUserIdAsync(string userId);
    }
}