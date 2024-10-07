using AngularTasks.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularTasks.Server.DTO;
namespace AngularTasks.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubscribtionController(MyDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }

        [HttpPost("AddUserSubscription")]
        public IActionResult AddUserSubscription([FromBody] UserSubscriptionDTO userInfo)
        {

            var subscription = _db.Subscriptions.Find(userInfo.ScriptionId);

            var amount = subscription.SubscriptionAmount;


            UserSubscription newSubscription = new UserSubscription()
            {
                UserId = userInfo.UserId,
                SubServiceId = userInfo.SubServiceId,
                ScriptionId = userInfo.ScriptionId,
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddMonths(Convert.ToInt32(amount))
            };


            _db.UserSubscriptions.Add(newSubscription);
            _db.SaveChanges();
            return Ok();
        }
    }
}
