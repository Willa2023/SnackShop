using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class SnackContext : DbContext
    {
        public SnackContext(DbContextOptions<SnackContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Snack> Snack { get; set; } = default!;
    }
}