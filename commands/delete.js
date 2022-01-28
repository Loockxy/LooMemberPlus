const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: "orderdelete",
  aliases: ["delorders", "del"],
  description: "",
  execute: async(client, message, args, data, db) => {
    let onwerId = config.OwnerID;

    if(!onwerId.includes(message.author.id)) return;

    let serverid = args[0]

    if(!serverid) return;

    db.delete(`code_${serverid}`)
    db.delete(`description_${serverid}`) 
    db.delete(`orders_${serverid}`)
    let embed = new Discord.MessageEmbed()
    .setColor('#2f3136') 
    .setDescription(`<@${message.author.id}> viens de supprimer un serveur sur la commande \`farm\` !`)
    message.channel.send(embed);
    let channelll = client.channels.cache.get("910927243826565121")
    channelll.send(embed)

} 
} 