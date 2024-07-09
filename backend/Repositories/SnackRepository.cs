using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Repositories
{
    public class SnackRepository : ISnackRepository
    {
        private readonly SnackShopContext _context;

        public SnackRepository(SnackShopContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Snack>> GetAllSnacksAsync()
        {
            return await _context.Snacks.ToListAsync();
        }

        public async Task<Snack> GetSnackByIdAsync(int id)
        {
            return await _context.Snacks.FindAsync(id);
        }

        public async Task AddSnackAsync(Snack snack)
        {
            _context.Snacks.Add(snack);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSnackAsync(Snack snack)
        {
            _context.Entry(snack).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSnackAsync(int id)
        {
            var snack = await _context.Snacks.FindAsync(id);
            if (snack != null)
            {
                _context.Snacks.Remove(snack);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> SnackExistsAsync(int id)
        {
            return await _context.Snacks.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddSnacksAsync(IEnumerable<Snack> snacks)
        {
            await _context.Snacks.AddRangeAsync(snacks);
            await _context.SaveChangesAsync();
        }


    }
}