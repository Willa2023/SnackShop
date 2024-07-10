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
            return Ok(await _sellRepository.GetAllSellsAsync());
        }

        // GET: api/Sell/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sell>> GetSellBySnackId(int id)
        {
            var sell = await _sellRepository.GetSellBySnackIdAsync(id);

            if (sell == null)
            {
                return NotFound();
            }

            return sell;
        }

        // POST: api/Sell
        [HttpPost("{id}/{quantity}")]
        public async Task<ActionResult<Sell>> AddSell(int snackId, int quantity)
        {
            var sell = await _sellRepository.AddSellAsync(snackId, quantity);
            return CreatedAtAction(nameof(GetSellBySnackId), new { snackId = sell.SnackId }, sell);
        }

    }
}