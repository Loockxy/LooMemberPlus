const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')
const config = require('../config.json');
module.exports = {
  name: "money",
  aliases: ["bal", "balance"], 
  description: "log of coins",
  execute: async(client, message, args, data, db) => {
    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || message.author
    if (user.username === undefined) user = user.user
    data = await get(message, user)
    let page = Number(args[0]) 
    if (!page || isNaN(page) || page < 1) page = 1
    let obj = { min: page * 10 - 10, max: page * 1 }
    let tpages = 1
    let n = 1
    data.logs.map((x, y) => {
      if (y == 1) n += 1, tpages++
    })
    let embeded = new Discord.MessageEmbed()
    .setDescription(`❎ Error, veuillez réessayer en faisant : **${config.prefix}money <page_id>**`)
    .setColor('#2f3136')
    if (page > tpages) return message.channel.send(embeded)
    let logs = []
    data.logs.map((x, y) => {
      if (y >= obj.min && y < obj.max) logs.push(x)
    }) 

    let embed = new Discord.MessageEmbed()
    
    .setAuthor("FreeMember+", client.user.displayAvatarURL())
    .setDescription(`Bonjour ${user.username}, Vous avez \`${data.coins.toFixed(1)}\` pièce(s) <:pice:934870881778434050>`)
    .addField("> Rejoint les serveur dans `-farm` pour gagner des **pièces**.\n", "> Obtenez des membres en achetant une publicité avec `-buy`.", true)
    .addField(`<:cb:934869965897625740> __**Vos dernières opérations**__`, logs.length == 0 ? "Aucune historique de transactions trouvé !" : logs.join("\n")) 
    .setColor("#2f3136")
    
    
    message.channel.send(embed)
  } 
}