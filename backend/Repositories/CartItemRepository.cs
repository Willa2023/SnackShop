using backend.Data;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

public class CartItemRepository : ICartItemRepository
{
    private readonly SnackShopContext _context;

    public CartItemRepository(SnackShopContext context)
    {
        _context = context;
    }

    public async Task AddCartItemAsync(CartItem cartItem)
    {
        var existingCartItem = await _context.CartItems
            .FirstOrDefaultAsync(item => item.SnackId == cartItem.SnackId && item.UserId == cartItem.UserId);

        if (existingCartItem != null)
        {
            existingCartItem.Quantity += cartItem.Quantity;
            _context.Entry(existingCartItem).State = EntityState.Modified;
        }
        else
        { _context.CartItems.Add(cartItem); }
        await _context.SaveChangesAsync();
    }

    public async Task UpdateCartItemAsync(CartItem cartItem)
    {
        _context.Entry(cartItem).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task<List<CartItem>> GetCartItemsByUserIdAsync(string userId)
    {
        return await _context.CartItems
            .Where(item => item.UserId == userId)
            .ToListAsync();
    }

    public async Task<CartItem> GetCartItemByIdAsync(int id)
    {
        return await _context.CartItems.FindAsync(id) ?? throw new Exception("CartItem not found");
    }

    public async Task DeleteCartItemAsync(string userId, int snackId)
    {
        Console.WriteLine($"Received DELETE request for userId: {userId}, snackId: {snackId}");
        var cartItem = await _context.CartItems
            .FirstOrDefaultAsync(item => item.SnackId == snackId && item.UserId == userId);

        if (cartItem != null)
        {
            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();
        }
    }
}