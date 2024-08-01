using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface ICartItemRepository
    {
        Task AddCartItemAsync(CartItem cartItem);
        Task UpdateCartItemAsync(CartItem cartItem);
        Task<List<CartItem>> GetCartItemsByUserIdAsync(string userId);
        Task<CartItem> GetCartItemByIdAsync(int id);
        Task DeleteCartItemAsync(string userId, int snackId);
    }
}