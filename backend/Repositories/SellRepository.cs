using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public class SellRepository : ISellRepository
    {
        private readonly SnackShopContext _context;

        public SellRepository(SnackShopContext context)
        {
            _context = context;
        }

        public async Task AddSellAsync(Sell sell)
        {
            _context.Sells.Add(sell);
            await _context.SaveChangesAsync();
        }

    }
}