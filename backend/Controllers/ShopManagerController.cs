using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ShopManagerController : ControllerBase
    {
        private readonly IShopManager _shopManager;

        public ShopManagerController(IShopManager shopManager)
        {
            _shopManager = shopManager;
        }

        // POST: api/ShopManager/AddStock
        [HttpPost("AddStock")]
        public async Task<ActionResult<Stock>> AddStock(Stock stock)
        {
            await _shopManager.AddStockAsync(stock);
            return CreatedAtAction("AddStock", new { id = stock.Id }, stock);
        }

        // POST: api/ShopManager/AddSell
        [HttpPost("AddSell")]
        public async Task<ActionResult<Sell>> AddSell(Sell sell)
        {
            await _shopManager.AddSellAsync(sell);
            return CreatedAtAction("AddSell", new { id = sell.Id }, sell);
        }
    }
}