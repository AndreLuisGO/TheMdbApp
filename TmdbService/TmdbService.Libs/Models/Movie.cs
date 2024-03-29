﻿using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace TmdbService.Libs.Models
{
   [DataContract]
   public class Movie
   {
      [DataMember(Name = "title")]
      public string Title { get; set; }

      [DataMember(Name = "id")]
      public int Id { get; set; }

      [DataMember(Name = "release_date")]
      public DateTime ReleaseDate { get; set; }

      [DataMember(Name = "genres")]
      public Genre[] Genres { get; set; }

      [DataMember(Name = "genre_ids")]
      public int[] GenreIds { get; set; }

      [DataMember(Name = "overview")]
      public string Overview { get; set; }

      [DataMember(Name = "poster_path")]
      public string PosterPath { get; set; }

      [DataMember(Name = "backdrop_path")]
      public string BackdropPath { get; set; }
   }
}
