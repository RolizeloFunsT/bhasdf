const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setDescription(`

▬▬▬▬▬▬[ :bee: **Kayıt Komutları** :bee: ]▬▬▬▬▬▬

> **»b!erkek-rol @rol** Erkek Rolünü Ayarlar.
> **»b!erkek-rol sıfırla** Erkek Rolünü Sıfırlar.
> **»b!kız-rol @rol** Kız Rolünü Ayarlar.
> **»b!kız-rol sıfırla** Kız Rolünü Sıfırlar.
> **»b!unregister-rol @rol** Kayıt Olunca Alınacak Rolü Ayarlar.
> **»b!ungregister-rol sıfırla** Kayıt Olunca Alınacak Rolü Sıfırlar.
> **»b!kayıt-kanal #kanal** Kayıt Kanalını Ayarlar.
> **»b!kayıt-kanal sıfırla **Kayıt Kanalını Sıfırlar.
> **»b!kayıt-görevlisi-rol @rol **Kayıt Görevlisi Rolünü Ayarlar.
> **»b!kayıt-görevlisi-rol sıfırla** Kayıt Görevlisi Rolünü Sıfırlar.
> **»b!kayıt-görevlisi-ver @kullanıcı **Belirttiğiniz Kullanıya Kayıtçı Rolü Verir.
> **:»b!kayıt-görevlisi-al @kullanıcı **Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır.
> **»b!e @kullanıcı isim yaş** Erkek Olarak Kayıt Edersiniz.
> **»b!k @kullanıcı isim yaş** Kız Olarak Kayıt Edersiniz

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
    aliases: ["kyardım", "ky", "khelp", "registerhelp", "rh"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kayıt-yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};