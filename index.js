//Enmap constants
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const tableSource = new EnmapLevel({name: "myTable"});
const myTable = new Enmap({provider: tableSource});
//End of enmap
//Discord constants
const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "test "
const config = require('./config.json')
bot.login(process.env.token)
//end

bot.myTable = new Enmap({name: "myTable"});

bot.on("ready", () => {
  bot.user.setGame("Hulkbot test... Only responds to owner...")
  console.log("Bot is ready.")
  bot.user.setUsername('Hulkb0t')
});

bot.on("message", message => {
  if (message.author.id == config.hulk) {
    if (message.content == prefix + "enmap") {
      message.channel.send("Enmap is running.").then(m => m.delete(2500))
    }
  } else {
    return;
  }
})
