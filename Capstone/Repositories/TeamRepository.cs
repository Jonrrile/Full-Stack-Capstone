﻿using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Capstone.Models;
using Capstone.Utils;

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
                          SELECT Id, Name, Odds 
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
                            Odds = DbUtils.GetInt(reader, "Odds")
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
                        SELECT Name, Odds
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
                            Odds = DbUtils.GetInt(reader, "Odds")
                        };
                    }

                    reader.Close();

                    return team;
                }
            }
        }
    }
}