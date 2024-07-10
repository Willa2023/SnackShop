using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SellController : ControllerBase
    {
        private readonly ISellRepository _sellRepository;

        public SellController(ISellRepository sellRepository)
        {
            _sellRepository = sellRepository;
        }

        // GET: api/Sell
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sell>>> GetSells()
        {
            var sells = await _sellRepository.GetAllSellsAsync();
            var sellDtos = sells.Select(sell => new SellDto
            {
                Id = sell.Id,
                SnackId = sell.SnackId,
                Snack = sell.Snack,
                Quantity = sell.Quantity,
                Date = sell.Date.ToString("yyyy-MM-dd"),
                StockId = sell.StockId,
                TotalPrice = sell.TotalPrice
            }).ToList();
            return Ok(sellDtos);
        }

        // GET: api/Sell/5
        [HttpGet("{snackId}")]
        public async Task<ActionResult<Sell>> GetSellBySnackId(int snackId)
        {
            var sell = await _sellRepository.GetSellBySnackIdAsync(snackId);
            if (sell == null)
            {
                return NotFound();
            }
            var sellDto = new SellDto
            {
                Id = sell.Id,
                SnackId = sell.SnackId,
                Snack = sell.Snack,
                Quantity = sell.Quantity,
                Date = sell.Date.ToString("yyyy-MM-dd"),
                StockId = sell.StockId,
                TotalPrice = sell.TotalPrice
            };
            return Ok(sellDto);
        }

        // POST: api/Sell
        [HttpPost("{snackId}/{quantity}")]
        public async Task<ActionResult<Sell>> AddSell(int snackId, int quantity)
        {
            var sell = await _sellRepository.AddSellAsync(snackId, quantity);
            return CreatedAtAction(nameof(GetSellBySnackId), new { snackId = sell.SnackId }, sell);
        }

    }
}