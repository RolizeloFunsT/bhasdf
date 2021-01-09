const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `b!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setDescription(`

▬▬▬[ :bee: **Bot Komutları** :bee: ]▬▬▬

> **» <a:B_Pikachu:792714614185132072> b!kayıt-yardım :** Kayıt Komutlarını Gösterir.
> **» <a:817375a6c5db49468fbf068671897864:792714588734488616> b!eğlence :** Eğlence Komutlarını Gösterir.
> **» <a:acf06f3a6405432e9fba107f86ddbe78:792714579117080586> b!komutlar :** Genel komutları gösterir.
> **» <a:B_Banned:792714589397057536> b!moderasyon :** Moderasyon Komutlarını Gösterir.
> **» <a:B_Seviye:792714607529558016> b!yeni-yama:** Yeni yama ile gelen özellikleri söyler.
> **» <a:B_Kristal:792714617368870943> b!güncel-yama:** Güncel yamayı söyler.
> **» <a:775670658822176790:792714617532710943> b!davet :** Botun Davet Linkini Atar.


**▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬**
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
    aliases: ["yardım", "y", "help", "yardim"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};