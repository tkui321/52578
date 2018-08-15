const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('online');
    client.user.setActivity("Rainbow", { type: "WATCHING" });
    
var yksrv = client.guilds.get('478176156655550494');
    setInterval(function(){
        yksrv.roles.find('name', 'רול מחליף צבעים').edit({color: 'RANDOM'})
    },process.env.RAINBOW);
});
client.on('message', msg => {
    if (msg.content === `*ping`) {
      msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
    }
  });

client.login(process.env.TOKEN)
