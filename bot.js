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

client.login(process.env.TOKEN)
