using backend.Data;
using backend.Models;
using backend.Repositories;

public class CartRepository : ICartRepository
{
    private readonly SnackShopContext _context;

    public CartRepository(SnackShopContext context)
    {
        _context = context;
    }

    public async Task AddCartAsync(Cart cart)
    {
        _context.Carts.Add(cart);
        await _context.SaveChangesAsync();
    }

    public Task AddCartItemAsync(CartItem cartItem)
    {
        throw new NotImplementedException();
    }

    public Task DeleteCartAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task DeleteCartItemAsync(int id)
    {
        throw new NotImplementedException();
    }
}