const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setDescription(`

▬▬▬▬▬▬[ :bee: **Eğlence Komutları** :bee: ]▬▬▬▬▬▬

> **»<a:bonkdoge:795379921492901918> b!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **»<a:catconfused:795379917730349146> b!balık-tut :** Denizde balık tutarsınız.
> **»<a:darkmodeparrot:795379919072919562> b!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **»<a:dancecarrot:795379918606958633> b!ara155 :** Polisi aramanıza yarar.
> **»<a:cooldoge:795379921224204289> b!efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **»<a:bouncingparrot:795379917289160704> b!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **»<a:aawyeah:795379916249890846> b!espri :** Bot sizin için espri yapar.
> **»<a:dancepickle:795379918606172172> b!kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **»<a:775670658822176790:792714617532710943> b!kralol :** Kral olmanıza yarar.
> **»<a:bonkcat:795382356181385246> b!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **»<a:rythmicalparrot:795379919878094888> b!kuş-dili-çevirici :** Yazdığınız şeyi kuş diline çevirir.
> **»<a:minecraftparrot:795379920507371555> b!kutuaçbs :** Brawl Stars Kutusu Açarsınız.
> **»<a:2171_happy_red:792714583256465439> b!kutuaçcs :** CS:GO Kutusu Açarsınız.
> **»<a:rainbowblob:795379920213770260> b!taksimdayı :** Dene Gör :D
> **»<a:dancehotdog:795379919143174225> b!bee6 :** Denemeni Kesinlikle Tavsiye Ediyoruz!


**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

`)

.setImage("https://cdn.discordapp.com/attachments/581567798715613194/795635795619872768/bee6.gif")  
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'fun'
};