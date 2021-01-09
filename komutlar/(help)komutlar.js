const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setDescription(`

▬▬▬▬▬▬[ :bee: **Bot Komutları** :bee: ]▬▬▬▬▬▬

> **» <a:minecraftparrot:795379920507371555>b!davet :** Botun Davet Linkini Atar.
> **» <a:rainbowblob:795379920213770260>b!istatislik :** Botun istatisliğini gösterir.
> **» <a:775670658822176790:792714617532710943>b!sunucu-pp :** Sunucunun pp'sini gösterir.
> **» <a:online:792714583495802910>b!ping :** Botun pingini hesaplar.
> **» <a:B_Loading:792714584149852172>b!server-bilgi :** Server hakkında bilgi verir.
> **» <a:bouncingparrot:795379917289160704>b!avatar :** Etiketlenen kullanıcının avatarını atar.

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
    aliases: ["komut-yardım", "komutyardım", "komutlar"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'komutlar', 
    description: 'The Help Command',
    usage: 'yardım'
};