const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬**")
.setDescription(`

▬▬▬[ :bee: **Güncel Yama** :bee: ]▬▬▬

> **» <a:B_Kristal:792714617368870943> **Güncel Yama:** **v200**
> **» <a:B_Seviye:792714607529558016> Bu yama ile beraber **neler geldiğini öğrenmek istersen:** __b!yeni-yama__ yaz.

**▬▬▬[** :gear: **Mesaj Bilgilendirme** :gear: **]▬▬▬**
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
    aliases: ["güncel-yama"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'güncel-yama', 
    description: 'The Help Command',
    usage: 'yardım'
};