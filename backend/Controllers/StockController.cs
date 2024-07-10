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

        // GET: api/Stock
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stock>>> GetStocks()
        {
            return Ok(await _stockRepository.GetAllStocksAsync());
        }

        // GET: api/Stock/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stock>> GetStockBySnackId(int id)
        {
            var stock = await _stockRepository.GetStockBySnackIdAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return stock;
        }

        // POST: api/Stock
        [HttpPost("{snackId}/{quantity}")]
        public async Task<ActionResult<Stock>> AddStock(int snackId, int quantity)
        {
            await _stockRepository.AddStockAsync(snackId, quantity);
            return CreatedAtAction("AddStock", new { id = snackId }, new { snackId, quantity });
        }
    }
}