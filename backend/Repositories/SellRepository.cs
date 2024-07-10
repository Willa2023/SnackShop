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
            return await _context.Sells.ToListAsync();
        }

        public async Task<Sell> GetSellBySnackIdAsync(int id)
        {
            return await _context.Sells.FirstOrDefaultAsync(s => s.SnackId == id) ?? throw new Exception("Sell not found");
        }

        public async Task AddSellAsync(int id, int quantity)
        {
            var sell = new Sell
            {
                SnackId = id,
                Quantity = quantity,
                Snack = await _context.Snacks.FindAsync(id) ?? throw new Exception("Snack not found")
            };
            _context.Sells.Add(sell);
            await _context.SaveChangesAsync();
        }

    }
}