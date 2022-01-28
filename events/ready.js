const Discord = require('discord.js')

module.exports = {
  execute: async(client) => {
   
    console.log(`LooMember+ et connecter`)
    client.user.setPresence({ status: "dnd", activity:{name: `-help・! [𝕮.𝕮] LOOCKXY#5348`, type: "PLAYING" }});
        setInterval(() => {
            client.user.setPresence({ status: "online", activity:{name: `Support -> .gg/KBdtUgyvD6 `, type: "WATCHING" }});
        }, 60000*60);
		

  } 
}
