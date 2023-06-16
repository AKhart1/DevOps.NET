namespace Features.Models
{
    public class Asteroid
    {
        public string? Name { get; set; }
        public double Absolute_magnitude_h { get; set; }
        public decimal Distance { get; set; }
        public decimal Relative_velocity { get; set; }
        public bool Is_potentially_hazardous_asteroid { get; set; }
        public string? Orbiting_body { get; set; }
    }
}
