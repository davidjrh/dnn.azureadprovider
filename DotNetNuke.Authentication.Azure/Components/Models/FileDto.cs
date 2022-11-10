namespace DotNetNuke.Authentication.Azure.Components.Models
{
    using Newtonsoft.Json;

    [JsonObject]
    public class FileDto
    {
        public int fileId { get; set; }

        public int folderId { get; set; }

        public string fileName { get; set; }

        public string folderPath { get; set; }
    }
}
