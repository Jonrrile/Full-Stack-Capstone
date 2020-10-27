using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Capstone.Repositories;

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BetController : ControllerBase
    {
        private readonly IBetRepository _betRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public BetController(
            IBetRepository betRepository,
            IUserProfileRepository userProfileRepository)
        {
            _betRepository = betRepository;
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet("GetAllBetsByTeam/{id}")]
        public IActionResult GetAllBetsByTeam(int id)
        {
            return Ok(_betRepository.GetAllBetsByTeamId(id));
        }
    }
}