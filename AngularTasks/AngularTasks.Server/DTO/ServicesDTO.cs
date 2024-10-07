namespace AngularTasks.Server.DTO
{
    public class ServicesDTO
    {
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}
