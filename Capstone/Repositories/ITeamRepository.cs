﻿using Capstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Repositories
{
    public interface ITeamRepository
    {
        List<Team> GetAll();
    }
}
