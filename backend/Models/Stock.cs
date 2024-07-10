namespace backend.Models
{
    public class Stock
    {
        public int SnackId { get; set; }
        public int Quantity { get; set; }
        public required Snack Snack { get; set; }
    }

}