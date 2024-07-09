namespace backend.Models
{
    public class Sell
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public int Quantity { get; set; }
        public required Snack Snack { get; set; }
    }
}
