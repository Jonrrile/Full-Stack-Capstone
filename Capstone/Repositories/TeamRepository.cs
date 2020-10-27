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
    public class TeamRepository : BaseRepository, ITeamRepository
    {
        public TeamRepository(IConfiguration configuration) : base(configuration) { }

        public List<Team> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Name, Odds, ImageLocation, Fact 
                            FROM Team
                            ORDER BY Odds ASC";

                    var reader = cmd.ExecuteReader();

                    var teams = new List<Team>();
                    while (reader.Read())
                    {
                        teams.Add(new Team()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Odds = DbUtils.GetInt(reader, "Odds"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            Fact = DbUtils.GetString(reader, "Fact")
                        });
                    }

                    reader.Close();

                    return teams;
                }
            }
        }

        public Team GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Name, Odds, ImageLocation, Fact
                        FROM Team
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Team team = null;
                    if (reader.Read())
                    {
                        team = new Team()
                        {
                            Id = id,
                            Name = DbUtils.GetString(reader, "Name"),
                            Odds = DbUtils.GetInt(reader, "Odds"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            Fact = DbUtils.GetString(reader, "Fact")
                        };
                    }

                    reader.Close();

                    return team;
                }
            }
        }

        public void UpdateTeamOdds (Team team)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Team
                        SET
                        Name = @name,
                        Odds = @odds,
                        ImageLocation = @imageLocation,
                        Fact = @fact
                       WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", team.Name);
                    cmd.Parameters.AddWithValue("@odds", team.Odds);
                    cmd.Parameters.AddWithValue("@imageLocation", team.ImageLocation);
                    cmd.Parameters.AddWithValue("@fact", team.Fact);
                    cmd.Parameters.AddWithValue("@id", team.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}