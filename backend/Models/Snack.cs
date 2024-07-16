namespace backend.Models
{
    public class Snack
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required decimal CostPrice { get; set; }
        public required decimal SellPrice { get; set; }
        public string? Brand { get; set; }
        public string? Image { get; set; }
    }
}