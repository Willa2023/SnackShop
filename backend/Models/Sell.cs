namespace backend.Models
{
    public class Sell
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public required Snack Snack { get; set; }
        public int Quantity { get; set; }
        public DateTime Date { get; set; }
        public int StockId { get; set; }

        public decimal TotalPrice => Math.Round(Snack.SellPrice * Quantity, 2);
        public decimal Profit => Math.Round((Snack.SellPrice - Snack.CostPrice) * Quantity, 2);

    }
}
