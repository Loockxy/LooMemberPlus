const Discord = require('discord.js');
const { get } = require('../constructors/sqlite.js');
const config = require('../config.json');
module.exports = {
  name: "bbalance",
  aliases: ["bbal"],
  description: "",
  execute: async(client, message, args, data, db) => {
   
     
  
    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
    
    
    if (user.username === undefined) user = user.user
    
    data = await get(message, user)
    
    let logs = []
    
    data.logs.map((x, y) => {
      if (y < 1) logs.push(x)
    })
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("LooMember+", client.user.displayAvatarURL())
    .setDescription(`Bonjour, ${user.username} à \`${data.coins.toFixed(1)}\` pièce(s) <:pice:934870881778434050>`)
    .addField(`<:cb:934869965897625740> __**C'est dernières opérations**__`, logs.length == 0 ? "Aucune historique de transactions trouvé !" : logs.join("\n"))
    .setColor("#2f3136")
    message.channel.send(embed) 
  } 
}