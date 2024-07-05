using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class SnackContext : DbContext
    {
        public SnackContext(DbContextOptions<SnackContext> options)
            : base(options)
        {
        }
        public DbSet<Snack> Snack { get; set; }
    }
}