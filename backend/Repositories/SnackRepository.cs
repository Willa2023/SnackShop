using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Repositories
{
    public class SnackRepository : ISnackRepository
    {
        private readonly SnackContext _context;

        public SnackRepository(SnackContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Snack>> GetAllSnacksAsync()
        {
            return await _context.Snack.ToListAsync();
        }

        public async Task<Snack> GetSnackByIdAsync(int id)
        {
            return await _context.Snack.FindAsync(id);
        }

        public async Task AddSnackAsync(Snack snack)
        {
            _context.Snack.Add(snack);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSnackAsync(Snack snack)
        {
            _context.Entry(snack).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSnackAsync(int id)
        {
            var snack = await _context.Snack.FindAsync(id);
            if (snack != null)
            {
                _context.Snack.Remove(snack);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> SnackExistsAsync(int id)
        {
            return await _context.Snack.AnyAsync(e => e.snackId == id);
        }

        public async Task BulkAddSnacksAsync(IEnumerable<Snack> snacks)
        {
            await _context.Snack.AddRangeAsync(snacks);
            await _context.SaveChangesAsync();
        }


    }
}