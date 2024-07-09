namespace backend.Models
{
    public class Snack
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public decimal? CostPrice { get; set; }
        public decimal? SellPrice { get; set; }
        public string? Brand { get; set; }
    }
}