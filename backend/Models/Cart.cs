namespace backend.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<CartItem> CartItems { get; set; }
    }

    public class CartItem
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public int Quantity { get; set; }
        public Snack Snack { get; set; }
    }
}
