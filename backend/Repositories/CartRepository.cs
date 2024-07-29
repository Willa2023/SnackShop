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

    public async Task CreateCartAsync(Cart cart)
    {
        _context.Carts.Add(cart);
        await _context.SaveChangesAsync();
    }
}