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

        public async Task<Sell> AddSellAsync(int id, int quantity)
        {
            var snack = await _context.Snacks.FindAsync(id);
            if (snack == null)
            {
                throw new Exception("Snack not found");
            }
            var sell = new Sell
            {
                SnackId = id,
                Quantity = quantity,
                Snack = snack
            };
            _context.Sells.Add(sell);
            await _context.SaveChangesAsync();
            return sell;
        }

    }
}