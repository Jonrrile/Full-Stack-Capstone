using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Capstone.Models;
using Capstone.Utils;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Routing.Template;

namespace Capstone.Repositories
{
    public class MatchupRepository : BaseRepository, IMatchupRepository
    {
        public MatchupRepository(IConfiguration configuration) : base(configuration) { }

        public List<Matchup> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, HomeTeam, AwayTeam, HomeOdds, AwayOdds, PlayDate, Location 
                            FROM Matchup";

                    var reader = cmd.ExecuteReader();

                    var matchups = new List<Matchup>();
                    while (reader.Read())
                    {
                        matchups.Add(new Matchup()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            HomeTeam = DbUtils.GetString(reader, "HomeTeam"),
                            AwayTeam = DbUtils.GetString(reader, "AwayTeam"),
                            HomeOdds = DbUtils.GetInt(reader, "HomeOdds"),
                            AwayOdds = DbUtils.GetInt(reader, "AwayOdds"),
                            PlayDate = DbUtils.GetDateTime(reader, "PlayDate"),
                            Location = DbUtils.GetString(reader, "Location")
                        });
                    }

                    reader.Close();

                    return matchups;
                }
            }
        }
    }
}
    
