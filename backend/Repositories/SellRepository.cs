using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class SellRepository : ISellRepository
    {
        private readonly SnackShopContext _context;

        public SellRepository(SnackShopContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sell>> GetAllSellsAsync()
        {
            return await _context.Sells.Include(s => s.Snack).Include(s => s.Stock).ToListAsync();
        }

        public async Task<Sell> GetSellBySnackIdAsync(int snackId)
        {
            return await _context.Sells.Include(s => s.Snack).Include(s => s.Stock).FirstOrDefaultAsync(s => s.SnackId == snackId) ?? throw new Exception("Sell not found");
        }

        public async Task<Sell> AddSellAsync(int snackId, int quantity)
        {
            var snack = await _context.Snacks.FindAsync(snackId);
            if (snack == null)
            {
                throw new Exception("Snack not found");
            }
            var stock = await _context.Stocks.FirstOrDefaultAsync(s => s.SnackId == snackId);
            if (stock == null)
            {
                throw new Exception("Stock not found");
            }
            if (stock.CurrentStock < quantity)
            {
                throw new Exception("Not enough stock");
            }
            var sell = new Sell
            {
                SnackId = snackId,
                Quantity = quantity,
                Snack = snack,
                StockId = stock.Id,
                Stock = stock,
                Date = DateTime.Now
            };
            _context.Sells.Add(sell);
            await _context.SaveChangesAsync();
            return sell;
        }

    }
}