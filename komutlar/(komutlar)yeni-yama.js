const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()


.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬**")
.setDescription(`

▬▬▬▬▬▬[ :bee: **v200 yaması ile gelenler:** :bee: ]▬▬▬▬▬▬

<a:B_Ileri:792714574360608779> **Tamamen yenilendim!**

<a:B_Ileri:792714574360608779> **Yeni gelişmiş yardım menüsü!**

<a:B_Ileri:792714574360608779> **Yeni __35__ Adet komut!**

<a:B_Ileri:792714574360608779> **7/24 Aktifim!**

▬▬▬▬▬▬[ :bee: **v300 yaması ile gelecekler:** :bee: ]▬▬▬▬▬▬

<a:B_Ileri:792714574360608779> **Yenilenmiş kayıt sistemi!**

<a:B_Ileri:792714574360608779> **Yeni yazı komutları!**

<a:B_Ileri:792714574360608779> **Yardım menüsüne eklenen yeni katagoriler!**

<a:B_Ileri:792714574360608779> **Ve işinize yarayacak bir kaç yeni komut!**

**▬▬▬▬▬▬▬[** :gear: **Mesaj Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
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
    aliases: ["yeni-yama"], 
    permLevel: 0 
};
  
  exports.help = {
    name: '', 
    description: 'The Help Command',
    usage: 'yeni-yama'
};