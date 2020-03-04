using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace TmdbService.Libs.Models
{
   [DataContract]
   public class Genre
   {
      [DataMember(Name = "id")]
      public int Id { get; set; }

      [DataMember(Name = "name")]
      public string Name { get; set; }

   }
}
