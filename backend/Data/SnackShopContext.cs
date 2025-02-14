using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class SnackShopContext : DbContext
    {
        public DbSet<Snack> Snacks { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Sell> Sells { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public SnackShopContext(DbContextOptions<SnackShopContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Snack>().ToTable("Snack");
            modelBuilder.Entity<Stock>().ToTable("Stock");
            modelBuilder.Entity<Sell>().ToTable("Sell");
            modelBuilder.Entity<CartItem>().ToTable("CartItem");
        }
    }
}