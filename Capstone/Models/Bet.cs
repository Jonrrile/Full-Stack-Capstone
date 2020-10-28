using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Capstone.Models
{
    public class Bet
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public int UserProfileId { get; set; }
        public int ToBetAmount { get; set; }
        public Team Team { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
