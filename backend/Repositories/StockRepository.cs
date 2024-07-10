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
        var stocks = await _context.Stocks.Include(s => s.Snack).Include(s => s.Sells).ToListAsync();
        foreach (var stock in stocks)
        {
            stock.SoldQuantity = stock.Sells.Sum(s => s.Quantity);
        }
        return stocks;
    }

    public async Task<Stock> GetStockBySnackIdAsync(int snackId)
    {
        var stock = await _context.Stocks.Include(s => s.Snack).Include(s => s.Sells).FirstOrDefaultAsync(s => s.SnackId == snackId) ?? throw new Exception("Stock not found");
        if (stock == null)
        {
            throw new Exception("Stock not found");
        }
        stock.SoldQuantity = stock.Sells.Sum(s => s.Quantity);
        return stock;
    }

    public async Task<Stock> AddStockAsync(int snackId, int quantity)
    {
        var snack = await _context.Snacks.FindAsync(snackId);
        if (snack == null)
        {
            throw new Exception("Snack not found");
        }
        var existingStock = await _context.Stocks.Include(s => s.Snack).FirstOrDefaultAsync(s => s.SnackId == snackId);
        if (existingStock != null)
        {
            existingStock.TotalStock += quantity;
            _context.Stocks.Update(existingStock);
            await _context.SaveChangesAsync();
            return existingStock;
        }
        else
        {
            var stock = new Stock
            {
                SnackId = snackId,
                TotalStock = quantity,
                Snack = snack
            };
            _context.Stocks.Add(stock);
            await _context.SaveChangesAsync();
            return stock;
        }
    }


}