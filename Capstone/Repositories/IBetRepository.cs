using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstone.Models;


namespace Capstone.Repositories
{
    public interface IBetRepository
    {
        List<Bet> GetAllBetsByTeamId(int id);
    }
}
