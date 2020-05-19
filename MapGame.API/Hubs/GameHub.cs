using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MapGame.API.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendName(string name)
        {
           await Clients.All.SendAsync("ReceiveName", name);
        }
    }
}
