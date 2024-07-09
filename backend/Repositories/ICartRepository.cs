using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public interface ICartRepository
    {
        Task AddCartAsync(Cart cart);
        Task AddCartItemAsync(CartItem cartItem);
        Task DeleteCartItemAsync(int id);
        Task DeleteCartAsync(int id);
        // Task<IEnumerable<CartItem>> GetCartItemsAsync(int cartId);
        // Task<Cart> GetCartAsync(int id);
        // Task<IEnumerable<Cart>> GetAllCartsAsync();
        // Task<bool> CartExistsAsync(int id);
    }
}