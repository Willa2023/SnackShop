namespace backend.Models
{
    public class Snack
    {
        public int snackId { get; set; }
        public required string name { get; set; }
        public decimal costPrice { get; set; }
        public decimal sellPrice { get; set; }
        public string description { get; set; }
    }
}