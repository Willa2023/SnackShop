namespace backend.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public int Quantity { get; set; }
        public Snack Snack { get; set; }
    }

}