const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')
let cooldown = new Map();
const config = require('../config.json');

module.exports = {
  name: "daily",
  description: "Code modifier par >Nion#0001",
  execute: async(client, message, args, data, db) => {

    if (message.channel.id !== "934880439003410453") return;
    
    let time = Date.now(); 
    if(cooldown.get(message.author.id) > time)
    { 
       const erreur = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`:sob: Vous avez déjà récuperer votre récompense <@${message.author.id}>\n*Veillez attendre  \`1\` heures.*`)
      .setFooter(config.EmbedFooter)
      message.channel.send(erreur).then(msg => {msg.delete({ timeout: 10000 })}).catch(console.error);return;}   
    
    
    db.add(`coins_${message.author.id}`, 1) 
    
    cooldown.set(message.author.id, time + 3600000);

    data.logs.unshift(`[+1] - Daily bonus !`)
    db.set(`logs_${message.author.id}`, data.logs)

       const success = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`<:cadeau:912801643597291520> **${message.author.tag}**, vous venez de récuperrer \`1\` pièces.`)
      .setFooter(config.EmbedFooter)
      message.channel.send(success) 
  } 
   } 