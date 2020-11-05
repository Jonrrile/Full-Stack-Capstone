using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Capstone.Models
{
    public class Matchup
    {
        public int Id { get; set; }
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }
        public int HomeOdds { get; set; }
        public int AwayOdds { get; set; }
        public DateTime PlayDate { get; set; }
        public string Location { get; set; }
    }
}
