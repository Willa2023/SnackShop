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

        public decimal TotalPrice
        {
            get
            {
                return Math.Round(Snack.SellPrice * Quantity, 2);
            }
        }
    }
}
