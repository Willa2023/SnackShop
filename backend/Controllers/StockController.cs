using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepository;

        public StockController(IStockRepository stockRepository)
        {
            _stockRepository = stockRepository;
        }

        // POST: api/Stock/AddStock
        [HttpPost("AddStock")]
        public async Task<ActionResult<Stock>> AddStock(Stock stock)
        {
            await _stockRepository.AddStockAsync(stock);
            return CreatedAtAction("AddStock", new { id = stock.Id }, stock);
        }
    }
}