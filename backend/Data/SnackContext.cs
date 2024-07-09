using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class SnackContext : DbContext
    {
        public DbSet<Snack> Snacks { get; set; }

        public SnackContext(DbContextOptions<SnackContext> options)
            : base(options)
        {
        }
    }
}