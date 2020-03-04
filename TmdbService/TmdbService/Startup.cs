using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace TmdbService
{
   public class Startup
   {
      // This method gets called by the runtime. Use this method to add services to the container.
      // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddMvc();
         services.AddSingleton<Libs.Services.ITmbdService, Libs.Services.TmdbService>();
         services.AddMvcCore().AddApiExplorer();
         services.AddSwaggerGen(c =>
         {
            c.SwaggerDoc("v1",
                new OpenApiInfo
                {
                   Title = "TheMDB App Api Backend",
                   Version = "v1",
                   Description = "A TMDB .Net Core 2.1 Api",
                });

         });
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {

         app.UseSwagger();
         app.UseSwaggerUI(c =>
         {
            c.SwaggerEndpoint("/swagger/v1/swagger.json",
                  "TheMDB App Api Backend ");
            c.RoutePrefix = string.Empty;
         });

         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }

         app.UseMvc();
      }
   }
}
