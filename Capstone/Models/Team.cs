using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Capstone.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Odds { get; set; }
    }
}
