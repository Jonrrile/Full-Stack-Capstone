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
    public class TeamController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;
        private readonly IUserProfileRepository _userProfileRepository;
     
        public TeamController(
            ITeamRepository teamRepository,
            IUserProfileRepository userProfileRepository)
      
        {
            _teamRepository = teamRepository;
            _userProfileRepository = userProfileRepository;
 
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_teamRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var team = _teamRepository.GetById(id);
            if (team == null)
            {
                return NotFound();
            }
            return Ok(team);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Team team)
        {
            if (id != team.Id)
            {
                return BadRequest();
            }
            _teamRepository.UpdateTeamOdds(team);
            return NoContent();
        }
    }
}
