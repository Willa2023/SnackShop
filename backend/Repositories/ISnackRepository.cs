using backend.Models;

namespace backend.Repositories
{
    public interface ISnackRepository
    {
        Task<IEnumerable<Snack>> GetAllSnacksAsync();
        Task<Snack> GetSnackByIdAsync(int id);
        Task AddSnackAsync(Snack snack);
        Task UpdateSnackAsync(Snack snack);
        Task DeleteSnackAsync(int id);
        Task<bool> SnackExistsAsync(int id);
    }
}