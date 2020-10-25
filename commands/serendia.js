const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

message.channel.send('Discord sunucumuz olan **Serendia Squad** Türkiye`nin en büyük kod sunucusu olmakla kalmayıp en kaliteli kodlarını paylaşmaktadır.\n\nSizde sunucumuza bu adresden gelebilirsiniz: https://discord.gg/Szft8gF);
};

exports.config = {
  name: "serendia",
  guildOnly: true,
  aliases: ["Piece ❤ Serendia Squad"],
};