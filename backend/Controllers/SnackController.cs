using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Repositories;

namespace Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SnackController : ControllerBase
    {
        private readonly ISnackRepository _snackRepository;

        public SnackController(ISnackRepository snackRepository)
        {
            _snackRepository = snackRepository;
        }

        // GET: Snack
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Snack>>> GetSnacks()
        {
            return Ok(await _snackRepository.GetAllSnacksAsync());
        }

        // GET: Snack/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Snack>> GetSnack(int id)
        {
            var snack = await _snackRepository.GetSnackByIdAsync(id);

            if (snack == null)
            {
                return NotFound();
            }

            return snack;
        }

        // PUT: Snack/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSnack(int id, Snack snack)
        {
            if (id != snack.snackId)
            {
                return BadRequest();
            }

            await _snackRepository.UpdateSnackAsync(snack);

            return NoContent();
        }

        // POST: Snack
        [HttpPost]
        public async Task<ActionResult<Snack>> PostSnack(Snack snack)
        {
            await _snackRepository.AddSnackAsync(snack);

            return CreatedAtAction("GetSnack", new { id = snack.snackId }, snack);
        }

        // DELETE: Snack/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSnack(int id)
        {
            await _snackRepository.DeleteSnackAsync(id);

            return NoContent();
        }
    }
}