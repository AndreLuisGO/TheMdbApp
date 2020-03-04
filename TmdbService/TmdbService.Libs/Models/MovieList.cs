using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace TmdbService.Libs.Models
{
   [DataContract]
   public class MovieList
   {
      [DataMember(Name = "page")]
      public int Page { get; set; }

      [DataMember(Name = "total_results")]
      public int TotalResults { get; set; }

      [DataMember(Name = "total_pages")]
      public int TotalPages { get; set; }

      [DataMember(Name = "results")]
      public List<Movie> Results { get; set; }
   }
}
