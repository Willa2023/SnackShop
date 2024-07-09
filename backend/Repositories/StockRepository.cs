using backend.Data;
using backend.Models;
using backend.Repositories;

public class StockRepository : IStockRepository
{
    private readonly SnackShopContext _context;

    public StockRepository(SnackShopContext context)
    {
        _context = context;
    }

    public async Task AddStockAsync(Stock stock)
    {
        _context.Stocks.Add(stock);
        await _context.SaveChangesAsync();
    }

}