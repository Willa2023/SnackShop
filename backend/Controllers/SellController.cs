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

        // POST: api/Sell/AddSell
        [HttpPost("AddSell")]
        public async Task<ActionResult<Sell>> AddSell(Sell sell)
        {
            await _sellRepository.AddSellAsync(sell);
            return CreatedAtAction("AddSell", new { id = sell.Id }, sell);
        }
    }
}