const Discord = require('discord.js')
const ms = require('parse-ms') 
const config = require('../config.json');
module.exports = {
  name: "check",
  description: "time",
  execute: async(client, message, args, data, db) => {
   
    let timeout = 259200000
    
    let time = []
    
    if (data.joinedDate !== null && timeout - (Date.now() - data.joinedDate) > 999) {
      Object.entries(ms(timeout - (Date.now() - data.joinedDate))).map((x, y) => {
        if (x[1] > 0 && y < 4) time.push(`**${x[1]} ${x[0]}**`)      })
      

      const noembed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      
      .setDescription(`Vous perdrez \`2\` pièces si vous partez maintenant !`)
      .addField(`Temps restant:`, time.join(", "), false)
      message.channel.send(noembed)   
     } else {
      const embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      
      .setDescription(`:wave: Bonjour ${message.author.username}, Vous pouvez quitter le serveur sans perdre de pièces.`)
      message.channel.send(embed) 
    } 
  } 
}