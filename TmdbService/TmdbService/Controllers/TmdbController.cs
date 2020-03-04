using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TmdbService.Libs.Models;
using TmdbService.Libs.Services;

namespace TmdbService.Controllers
{
   [DataContract]
   public class TmdbController : ControllerBase
   {
      private readonly ITmbdService _tmdbService;

      public TmdbController(ITmbdService tmdbService)
      {
         _tmdbService = tmdbService;
      }

      [HttpGet]
      [Route("api/v1/tmdb/movie/{movieId}")]
      public async Task<IActionResult> GetMovieDetails(int movieId)
      {
         var result = await _tmdbService.GetMovieDetailsById(movieId);

         return Ok(result);
      }

      [HttpGet]
      [Route("api/v1/tmdb/movie/upcoming/{pageNumber}")]
      public async Task<IActionResult> GetUpcoming(int pageNumber)
      {
         var result = await _tmdbService.GetUpcomingMovies(pageNumber);

         return Ok(result);
      }

      [HttpGet]
      [Route("api/v1/tmdb/search/movie/{searchTerm}")]
      public async Task<IActionResult> SearchMovieByName(string searchTerm, int page)
      {
         var result = await _tmdbService.GetMoviesByName(searchTerm, page);

         return Ok(result);
      }
   }
}