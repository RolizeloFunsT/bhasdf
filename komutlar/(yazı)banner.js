const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`⛔ Yazı yazmanız gerekmektedir.`);
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`.replace(
    " ",
    "+"
  );

  const motion = new Discord.MessageEmbed()
    .setTitle("Banner")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Banner Oluşturuldu");
  message.channel.send(motion);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banner"],
  permLevel: 0
};

exports.help = {
  name: "banner",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "banner <yazı>"
};