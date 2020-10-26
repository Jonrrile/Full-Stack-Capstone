using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Capstone.Repositories;
using Capstone.Models;
using Microsoft.AspNetCore.Authorization;

namespace Capstone.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;
     
        public TeamController(
            ITeamRepository teamRepository)
      
        {
            _teamRepository = teamRepository;
 
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_teamRepository.GetAll());
        }
    }
}
