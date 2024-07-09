using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class SnackShopContext : DbContext
    {
        public DbSet<Snack> Snacks { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Sell> Sells { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }


        public SnackShopContext(DbContextOptions<SnackShopContext> options)
            : base(options)
        {
        }

    }
}