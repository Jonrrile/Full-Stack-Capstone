using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO.Pipelines;
using System.Linq;
using System.Threading.Tasks;
using Capstone.Models;
using Capstone.Utils;

namespace Capstone.Repositories
{
    public class BetRepository : BaseRepository, IBetRepository
    {
        public BetRepository(IConfiguration config) : base(config) { }
        public List<Bet> GetAllBetsByTeamId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT b.Id, b.TeamId, b.UserProfileId, b.ToBetAmount, u.Name
                        FROM Bet b
                        JOIN Team t
                        ON b.TeamId = t.Id
                        JOIN UserProfile u
                        ON b.UserProfileId = u.Id
                        WHERE b.TeamId = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    var bets = new List<Bet>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Bet bet = new Bet
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            TeamId = reader.GetInt32(reader.GetOrdinal("TeamId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            ToBetAmount = reader.GetInt32(reader.GetOrdinal("ToBetAmount")),
                            Team = new Team
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("TeamId")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            },
                            UserProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            }
                        };

                        bets.Add(bet);
                    }

                    reader.Close();
                    return bets;
                }
            }
        }
    }
}
