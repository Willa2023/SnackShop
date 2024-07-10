using backend.Data;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class StockRepository : IStockRepository
{
    private readonly SnackShopContext _context;

    public StockRepository(SnackShopContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Stock>> GetAllStocksAsync()
    {
        return await _context.Stocks.ToListAsync();
    }

    public async Task<Stock> GetStockBySnackIdAsync(int id)
    {
        return await _context.Stocks.FirstOrDefaultAsync(s => s.SnackId == id) ?? throw new Exception("Stock not found");
    }

    public async Task AddStockAsync(int id, int quantity)
    {
        var stock = new Stock
        {
            SnackId = id,
            Quantity = quantity,
            Snack = await _context.Snacks.FindAsync(id) ?? throw new Exception("Snack not found")
        };
        _context.Stocks.Add(stock);
        await _context.SaveChangesAsync();
    }


}