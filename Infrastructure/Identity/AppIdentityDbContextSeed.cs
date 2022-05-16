using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser{
                    DisplayName = "Kipson Tshidino",
                    Email = "kipson@test.com",
                    UserName = "kipson@test.com",
                    Address = new Address{
                        FirstName = "Kipson",
                        LastName = "Tshidino",
                        Street = "123 Test St",
                        City = "East London",
                        Country = "South Africa",
                        PostalCode = "5656"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}