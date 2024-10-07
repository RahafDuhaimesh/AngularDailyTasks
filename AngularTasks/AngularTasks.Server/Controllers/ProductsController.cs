using AngularTasks.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTasks.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ProductsController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetAllProducts")]
        public IActionResult GetAllProducts()
        {
            var Products = _db.Products.ToList();
            if (Products == null) { return BadRequest(); }
            return Ok(Products);
        }
    }
}
