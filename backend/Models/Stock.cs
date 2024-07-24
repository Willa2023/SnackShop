using System.Text.Json.Serialization;

namespace backend.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        public required Snack Snack { get; set; }
        public int TotalStock { get; set; }
        public int CurrentStock => TotalStock - SoldQuantity;
        public int SoldQuantity { get; set; }
        public ICollection<Sell> Sells { get; set; } = new List<Sell>();

        public decimal TotalCost => Math.Round(Snack.CostPrice * TotalStock, 2);
        public decimal TotalSell => Math.Round(Snack.SellPrice * SoldQuantity, 2);
        public decimal TotalProfit => Math.Round(TotalSell - TotalCost, 2);
    }

    public class SimpleStock
    {
        public int Id { get; set; }
        public int SnackId { get; set; }
        // public string Snack { get; set; }
        public int TotalStock { get; set; }
        public int CurrentStock { get; set; }
        public int SoldQuantity { get; set; }

        // [JsonIgnore]
        // public List<Sell> Sells { get; set; }
    }

}