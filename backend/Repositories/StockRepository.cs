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
        return await _context.Stocks.Include(s => s.Snack).ToListAsync();
    }

    public async Task<Stock> GetStockBySnackIdAsync(int snackId)
    {
        return await _context.Stocks.Include(s => s.Snack).FirstOrDefaultAsync(s => s.SnackId == snackId) ?? throw new Exception("Stock not found");
    }

    public async Task<Stock> AddStockAsync(int snackId, int quantity)
    {
        var snack = await _context.Snacks.FindAsync(snackId);
        if (snack == null)
        {
            throw new Exception("Snack not found");
        }
        var stock = new Stock
        {
            SnackId = snackId,
            Quantity = quantity,
            Snack = snack
        };
        _context.Stocks.Add(stock);
        await _context.SaveChangesAsync();

        return stock;
    }


}