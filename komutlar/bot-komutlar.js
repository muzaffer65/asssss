const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Stoplazma - Komut Sayısı`)
    .setDescription('**\n Stoplazma Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ffffff")
    .setThumbnail('https://cdn.discordapp.com/attachments/828544878652424235/835151645712056320/360_F_142102224_9XcSujUKfSafiqmq91Zy9UGTttHGhelg.jpg')
    .setTimestamp()
    .setFooter("Stoplazma | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

