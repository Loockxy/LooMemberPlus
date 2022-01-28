const Discord = require('discord.js')

module.exports = {
  execute: async(client, guild) => {

    let channel = client.channels.cache.get("935966550857494588")
 

const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle(`:sob: LooMember+ à quitter un serveur !`)
    .setColor(`#2f3136`)
    .setDescription("<:info:929201887511719946> __Informations :__\n• **Nom:** \`"+ guild.name +"\`\n• **ID:** \`"+guild.id+"\`\n• **Membres:** \`"+guild.memberCount+"\`")
    .setThumbnail(guild.iconURL())
    if (channel) channel.send(embed) 

  } 
} 
