const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = {
  name: "add",
  aliases: ["invite", "link", "invites", "invs"],
  description: "",
  execute: async(client, message) => {
   
    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    
    .setDescription(`Vous pouvez m\'ajouter sur votre serveur en cliquant [ici](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8).`)    
    .setColor("#2f3136")
    message.channel.send(embed)
      
    
  } 
}