using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using TmdbService.Libs.Models;

namespace TmdbService.Libs.Services
{
   public class TmdbService : ITmbdService
   {
      public async Task<Movie> GetMovieDetailsById(int movieId)
      {
         using (var client = new HttpClient())
         {
            var url = new Uri(Properties.Resources.baseUrl + $"movie/{movieId}?api_key=" + Properties.Resources.apiKey);

            var response = await client.GetAsync(url);

            string jsonResponse;
            using (var content = response.Content)
            {
               jsonResponse = await content.ReadAsStringAsync();
            }

            var Movie = JsonConvert.DeserializeObject<Movie>(jsonResponse);

            return Movie;
         }
      }

      public async Task<MovieList> GetUpcomingMovies(int page = 1)
      {
         using (var client = new HttpClient())
         {
            var url = new Uri(Properties.Resources.baseUrl + "movie/upcoming?api_key=" + Properties.Resources.apiKey + $"&page={page}");

            var response = await client.GetAsync(url);

            string jsonResponse;
            using (var content = response.Content)
            {
               jsonResponse = await content.ReadAsStringAsync();
            }

            return JsonConvert.DeserializeObject<MovieList>(jsonResponse);
         }
      }

      /// <summary>
      ///   Search for movies 
      /// </summary>
      /// <param name="searchCriteria"></param>
      /// <param name="page"></param>
      /// <returns></returns>
      public async Task<MovieList> GetMoviesByName(string searchCriteria, int page = 1)
      {
         using (var client = new HttpClient())
         {
            var url = new Uri(Properties.Resources.baseUrl + "search/movie?api_key=" + Properties.Resources.apiKey + $"&query={System.Web.HttpUtility.UrlEncode(searchCriteria)}&page={page}&include_adult=false");

            var response = await client.GetAsync(url);

            string jsonResponse;
            using (var content = response.Content)
            {
               jsonResponse = await content.ReadAsStringAsync();
            }

            return JsonConvert.DeserializeObject<MovieList>(jsonResponse);
         }
      }

   }
}
