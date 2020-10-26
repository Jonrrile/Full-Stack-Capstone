using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Bet
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public int UserProfileId { get; set; }
        public int ToBetAmount { get; set; }
        public int ToWinAmount { get; set; }
        public Team Team { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
