const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()


.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setDescription(`

▬▬▬▬▬▬[ :bee: **Moderasyon Komutları** :bee: ]▬▬▬▬▬▬

> **»<a:B_Banned:792714589397057536>b!ban :** Belirtilen kullanıcıya ban atar.
> **»<a:offline:792714581457240074>b!kick :** 'Belirtilen kullanıcıyı kickler.
> **»<a:B_Banned:792714589397057536>b!unban :** 'Sunucuda banlı olan kişinin banını açar.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
Bu komut ${message.author.username} tarafından istendi! 

`)

.setImage("https://cdn.discordapp.com/attachments/581567798715613194/795635795619872768/bee6.gif")  
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["myardım", "my", "mhelp", "moderation", "mod"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'The Help Command',
    usage: 'yardım'
};