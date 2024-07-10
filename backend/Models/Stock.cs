namespace backend.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public required Snack Snack { get; set; }
        public int TotalStock { get; set; }
        public int CurrentStock
        {
            get
            {
                return TotalStock - SoldQuantity;
            }
        }
        public int SoldQuantity { get; set; }
        public ICollection<Sell> Sells { get; set; } = new List<Sell>();
    }

}