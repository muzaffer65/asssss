const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/828544878652424235/835151645712056320/360_F_142102224_9XcSujUKfSafiqmq91Zy9UGTttHGhelg.jpg`)
.addField("__**Bot Verileri**__", `<a:Ayar:831847605909979176>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:Ayar:831847605909979176>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:Ayar:831847605909979176>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:Ayar:831847605909979176>  **Bot Sahibi**  <@610402966507225088> \n **Muzaffer Karaman#1361** \n\n <a:Ayar:831847605909979176> \ **Bot Geliştiricisi**  <@610402966507225088> \n **Muzaffer Karaman#1361** \n\n <a:Ayar:831847605909979176>  **Bot Sahibi**  <@610402966507225088> \n **Muzaffer Karamnan#1361** \n`)
.addField("__**Sürümler**__", `<a:Ayar:831847605909979176>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:Ayar:831847605909979176>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:Ayar:831847605909979176>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:Ayar:831847605909979176>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/828544878652424235/831859175876329542/standard.gif`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}