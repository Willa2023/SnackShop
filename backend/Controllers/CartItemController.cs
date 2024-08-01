using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CartItemController : ControllerBase
    {
        private readonly ICartItemRepository _cartItemRepository;

        public CartItemController(ICartItemRepository cartItemRepository)
        {
            _cartItemRepository = cartItemRepository;
        }

        // GET: api/CartItem/{userid}
        [HttpGet("{userId}")]
        public async Task<ActionResult<List<CartItem>>> GetCartItems(string userId)
        {
            var items = await _cartItemRepository.GetCartItemsByUserIdAsync(userId);
            if (items == null || items.Count == 0)
            {
                return NotFound();
            }
            Console.WriteLine(items);
            return Ok(items);
        }

        // GET: api/CartItem/id/{id}
        [HttpGet("id/{id}")]
        public async Task<ActionResult<CartItem>> GetCartItem(int id)
        {
            var cartItem = await _cartItemRepository.GetCartItemByIdAsync(id);
            if (cartItem == null)
            {
                return NotFound();
            }
            return Ok(cartItem);
        }

        // POST: api/CartItem
        [HttpPost]
        public async Task<ActionResult<CartItem>> AddItem(CartItem cartItem)
        {
            await _cartItemRepository.AddCartItemAsync(cartItem);
            return CreatedAtAction("GetCartItem", new { id = cartItem.Id }, cartItem);
        }

        // PUT: api/CartItem/{Id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(int id, CartItem cartItem)
        {
            if (id != cartItem.Id)
            {
                return BadRequest();
            }
            await _cartItemRepository.UpdateCartItemAsync(cartItem);
            return NoContent();
        }

        // Delete: api/CartItem/{userId}
        [HttpDelete("{userId}/{snackId}")]
        public async Task<ActionResult> DeleteItem(string userId, int snackId)
        {
            await _cartItemRepository.DeleteCartItemAsync(userId, snackId);
            return NoContent();
        }




    }
}