using backend.Data;
using backend.Models;
using backend.Repositories;

public class ShopManager : IShopManager
{
    private readonly SnackContext _context;

    public ShopManager(SnackContext context)
    {
        _context = context;
    }

    public async Task AddStockAsync(Stock stock)
    {
        _context.Stocks.Add(stock);
        await _context.SaveChangesAsync();
    }

    public async Task AddSellAsync(Sell sell)
    {
        _context.Sells.Add(sell);
        await _context.SaveChangesAsync();
    }
}