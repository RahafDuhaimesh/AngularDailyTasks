using AngularTasks.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularTasks.Server.DTO;
namespace AngularTasks.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;


        public UsersController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        async public Task<IActionResult> getUser()
        {
            var users = _db.Users.ToList();
            return Ok(users);
        }


        [HttpPost]
        public IActionResult addUser([FromForm] UserRequestDTO dto)
        {
            var userEmail = _db.Users.Where(x => x.Email == dto.Email).FirstOrDefault();

            if (userEmail != null)
            {
                return BadRequest("Email Exist");
            }

            var user1 = new User
            {
                UserName = dto.Name,
                Email = dto.Email,
                PasswordHash = dto.Password,
               
            };

            _db.Users.Add(user1);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] string Email, [FromForm] string PasswordHash)
        {
            var user = _db.Users.FirstOrDefault(x => x.Email == Email);

            if (user == null)
            {
                return BadRequest("User not found.");
            }

            if (user.PasswordHash != PasswordHash)  // Assuming password is stored as plain text
            {
                return BadRequest("Incorrect password.");
            }

            return Ok(new { email = user.Email });
        }
    }
}
