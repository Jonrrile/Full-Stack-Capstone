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
        Bet GetBetByUserProfileId(int id, int userProfileId);
        void PlaceBet(Bet bet);
        Bet GetBetById(int id);
        void DeleteBet(int id);
        void UpdateBet(Bet bet);
    }
}
