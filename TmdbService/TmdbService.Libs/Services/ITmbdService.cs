using System.Threading.Tasks;
using TmdbService.Libs.Models;

namespace TmdbService.Libs.Services
{
   public interface ITmbdService
   {
      Task<Movie> GetMovieDetailsById(int movieId);

      Task<MovieList> GetUpcomingMovies(int page);

      Task<MovieList> GetMoviesByName(string searchCriteria, int page);
   }
}