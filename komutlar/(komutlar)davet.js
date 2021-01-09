const Discord = require("discord.js");

exports.run = (client, message) => {
  
  const Embed = new Discord.MessageEmbed()

  
  .setColor("RANDOM")
  .setTitle("Bee6")
  .setDescription(`
  Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=792366564448010251&permissions=8&scope=bot)
  Bu komut ${message.author.username} tarafından istendi!
  `)
  
  .setImage("https://cdn.discordapp.com/attachments/581567798715613194/795635795619872768/bee6.gif")
  .setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embed)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["invite", "davet"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'The Help Command',
    usage: 'yardım'
};