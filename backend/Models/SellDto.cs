namespace backend.Models
{
    public class SellDto
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public required Snack Snack { get; set; }
        public int Quantity { get; set; }
        public string? Date { get; set; }
        public int StockId { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal Profit { get; set; }
    }
}