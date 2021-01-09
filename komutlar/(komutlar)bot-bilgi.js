const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail("https://cdn.discordapp.com/attachments/581567798715613194/796031080146665502/beelogo.gif")
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Botun Verileri:", 
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Sahibi:",
      `> Bot geliştiricisi: <@545651586559377410> | <@546001266984353794>`
    ) 
    .addField(
      "Sürümler:",
      `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}** \n > Botun sürümü: **v200**`
    ) 
    .addField(
      "Botun Gecikmeleri:",
      `> Bot pingi: **${
        client.ws.ping
      }** \n> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};