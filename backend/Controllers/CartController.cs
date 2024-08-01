using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        // GET: api/Cart/GetCart
        [HttpGet("GetCart")]
        public async Task<ActionResult<Cart>> GetCart(string userId)
        {
            var cart = await _cartRepository.GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                return NotFound();
            }
            return cart;
        }

        // POST: api/Cart/CreateCart
        [HttpPost("CreateCart")]
        public async Task<ActionResult<Cart>> CreateCart(Cart cart)
        {
            await _cartRepository.AddCartAsync(cart);
            return CreatedAtAction("Create Cart", new { id = cart.Id }, cart);
        }

        // PUT: api/Cart/UpdateCart
        [HttpPut("UpdateCart")]
        public async Task<ActionResult<Cart>> UpdateCart(string userId, Cart cart)
        {
            if (userId != cart.UserId)
            {
                return BadRequest();
            }
            try
            {
                await _cartRepository.UpdateCartAsync(cart);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(userId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        private bool CartExists(string userId)
        {
            return _cartRepository.GetCartByUserIdAsync(userId) != null;
        }

    }
}