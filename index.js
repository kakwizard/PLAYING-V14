const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const client = new Client({ intents: GatewayIntentBits.Guilds, })

client.on("ready", async () => {
  client.user.setPresence({ status: "dnd"}) // Type Status dnd , idle , online
  client.user.setActivity({ name: `BAWKA GAWRAY PROJECT KAK WIZARD KT UP`, type: ActivityType.Playing }) // Type Activity Playing , Watching , Streaming 
  console.log(client.user.tag)
})



client.on("ready", async () => {
 try{
const { joinVoiceChannel } = require('@discordjs/voice'); 

client.channels.fetch("IDVOICE").then((channel) => { 
 console.log(`${client.user.tag} Connected To Voice`) 
const VoiceConnection = joinVoiceChannel({ channelId: channel.id, 
guildId: channel.guild.id, 
adapterCreator: channel.guild.voiceAdapterCreator,
selfDeaf: true,
selfMute: true
  }); 
     });
  } catch (err) {
console.log(err)
}
});


client.login("OTkxNDI1OTMyMTY4NTM2MTU1.Goqlql.AtB9zpHv1MH5O3HBWl1WC8enUhJHp2AA1hN5aU")
// All Copyright By SmSm
