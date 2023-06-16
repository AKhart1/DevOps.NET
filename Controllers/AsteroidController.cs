using Features.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Features.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AsteroidController : Controller
    {
        private readonly string API_KEY = string.Empty;
        private readonly HttpClient _httpclient;

        public AsteroidController(IConfiguration conf, HttpClient httpClient)
        {
            API_KEY = conf.GetSection("NASA_API_KEY").Value;
            _httpclient = httpClient;
        }

        [HttpGet]
        public async Task<IEnumerable<Asteroid>> GetAsteroid()
        {
            DateTime startDate = DateTime.Today.AddDays(-1);
            DateTime endDate = DateTime.Now;

            string formattedStartDate = startDate.ToString("yyyy-MM-dd");
            string formattedEndDate = endDate.ToString("yyyy-MM-dd");

            List<Asteroid> asteroids = new();

            string apiURL = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={formattedStartDate}&end_date={formattedEndDate}&api_key={API_KEY}";

            HttpResponseMessage response = await _httpclient.GetAsync(apiURL);

            if (response.IsSuccessStatusCode)
            {              

                var content = await response.Content.ReadAsStringAsync();
                var jsonObject = JsonConvert.DeserializeObject<dynamic>(content);

                foreach (var date in jsonObject["near_earth_objects"].Properties())
                {
                    foreach (var asteroidData in date.Value)
                    {
                        Asteroid ast = new ()
                        {
                            Name = asteroidData["name"],
                            Absolute_magnitude_h = asteroidData["absolute_magnitude_h"],
                            Distance = asteroidData["close_approach_data"][0]["miss_distance"]["kilometers"],
                            Relative_velocity = asteroidData["close_approach_data"][0]["relative_velocity"]["kilometers_per_second"],
                            Is_potentially_hazardous_asteroid = asteroidData["is_potentially_hazardous_asteroid"],
                            Orbiting_body = asteroidData["close_approach_data"][0]["orbiting_body"]
                        };

                        asteroids.Add(ast);
                    }
                }

            }
            return asteroids;
        }
    }
}
