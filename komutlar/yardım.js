const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Stoplazma Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:gster1:831857087901335594>  Stoplazma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:gster1:831857087901335594>  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:gster1:831857087901335594>  \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:gster1:831857087901335594>  \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:gster1:831857087901335594>  \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:gster1:831857087901335594>  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:gster1:831857087901335594>  \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:gster1:831857087901335594>  \`${prefix}davet\` | Stoplazma'yi Sunucunuza Davet Edersiniz\n<a:gster1:831857087901335594>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:gster1:831857087901335594>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/828544878652424235/831859175876329542/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}