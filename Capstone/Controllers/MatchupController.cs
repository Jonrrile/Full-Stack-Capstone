using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Capstone.Repositories;
using Capstone.Models;
using Microsoft.AspNetCore.Authorization;

namespace Capstone.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MatchupController : ControllerBase
    {
        private readonly IMatchupRepository _matchupRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public MatchupController(
            IMatchupRepository matchupRepository,
            IUserProfileRepository userProfileRepository)

        {
            _matchupRepository = matchupRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_matchupRepository.GetAll());
        }
     
    }
}
