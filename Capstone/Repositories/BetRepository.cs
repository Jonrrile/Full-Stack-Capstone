using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO.Pipelines;
using System.Linq;
using System.Threading.Tasks;
using Capstone.Models;
using Capstone.Utils;
using Newtonsoft.Json.Linq;
using Microsoft.Data.SqlClient;

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
        public void PlaceBet(Bet bet)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Bet (TeamId, UserProfileId, ToBetAmount)
                                        OUTPUT INSERTED.ID
                                        VALUES (@teamId, @userProfileId, @toBetAmount)";
                    cmd.Parameters.AddWithValue("@teamId", bet.TeamId);
                    cmd.Parameters.AddWithValue("@userProfileId", bet.UserProfileId);
                    cmd.Parameters.AddWithValue("@toBetAmount", bet.ToBetAmount);
                    int id = (int)cmd.ExecuteScalar();

                    bet.Id = id;
                }
            }
        }

        public Bet GetBetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT b.Id, b.TeamId, b.UserProfileId, b.ToBetAmount 
                        FROM Bet b
    
                        WHERE b.Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Bet bet = new Bet
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            TeamId = reader.GetInt32(reader.GetOrdinal("TeamId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            ToBetAmount = reader.GetInt32(reader.GetOrdinal("ToBetAmount")),
                        };

                        reader.Close();
                        return bet;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public Bet GetBetByUserProfileId(int id, int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT b.Id, b.toBetAmount, b.teamId, b.UserProfileId
                                u.[Name], u.Email
                         FROM Bet b
                                LEFT JOIN UserProfile u ON b.UserProfileId = u.id
                         WHERE b.id = @id AND b.UserProfileId = @userProfileId";

                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    Bet bet = null;

                    if (reader.Read())
                    {
                        bet = NewBetFromReader(reader);
                    }

                    reader.Close();

                    return bet;
                }
            }
        }

        public List<Bet> GetBetByUserProfileIdList(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT b.Id, b.ToBetAmount, b.TeamId, b.UserProfileId,
                                u.[Name], u.Email
                        FROM Bet b
                                LEFT JOIN UserProfile u ON b.UserProfileId = u.id
                         WHERE  b.UserProfileId = @userProfileId";

                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    var bets = new List<Bet>();

                    while (reader.Read())
                    {
                        bets.Add(NewBetFromReader(reader));
                    }

                    reader.Close();

                    return bets;
                }
            }
        }
        

        private Bet NewBetFromReader(SqlDataReader reader)
        {
            return new Bet()
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                ToBetAmount = reader.GetInt32(reader.GetOrdinal("ToBetAmount")),
                TeamId = reader.GetInt32(reader.GetOrdinal("TeamId")),
                Team = new Team()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("TeamId")),
                    Name = reader.GetString(reader.GetOrdinal("Name"))
                },
                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                UserProfile = new UserProfile()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                    Name = reader.GetString(reader.GetOrdinal("Name")),
                    Email = reader.GetString(reader.GetOrdinal("Email")),
                }
            };
        }
           

        public void DeleteBet(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Bet
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void UpdateBet(Bet bet)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Bet
                        SET
                                    
 
                            ToBetAmount = @toBetAmount
                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@toBetAmount", bet.ToBetAmount);
                    cmd.Parameters.AddWithValue("@id", bet.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}