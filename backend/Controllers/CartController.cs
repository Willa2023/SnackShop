using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        // POST: api/Cart/AddCart
        [HttpPost("AddCart")]
        public async Task<ActionResult<Cart>> AddCart(Cart cart)
        {
            await _cartRepository.AddCartAsync(cart);
            return CreatedAtAction("AddCart", new { id = cart.Id }, cart);
        }

    }
}