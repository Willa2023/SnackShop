namespace backend.Models
{
    // public class Cart
    // {
    //     public int Id { get; set; }
    //     public string UserId { get; set; }
    //     public List<CartItem> CartItems { get; set; } = new List<CartItem>();
    // }

    public class CartItem
    {
        public int Id { get; set; }

        public string UserId { get; set; }
        public int SnackId { get; set; }
        public int Quantity { get; set; }
        public Boolean Checked { get; set; }
    }
}
