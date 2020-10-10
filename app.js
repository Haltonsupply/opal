// DEPENDENCIES
const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require('request');
require('dotenv').config()
//
 
const ebay = new (require('./features/ebay'))();
const email = new (require('./features/email'))();
const address = new (require('./features/address'))();
const control = new (require('./features/control'))();
const fee = new (require('./features/fee'))();
const help = new (require('./features/help'))();
const curr = new (require('./features/curr'))
const downloads = new (require('./features/downloads'))
const ping = new (require('./features/ping'))
const shoe = new (require('./features/shoe'))
const poll = new (require('./features/poll'))
const botbroker = new (require('./features/botbroker'))
const embed = new (require('./features/embed'))
const reminder = new (require('./features/reminder'))
const giveaway = new (require('./features/giveaway'))
const delay = new (require('./features/delay'))
const snowflake = new (require('./features/snowflake'))
const geocoder = new (require('./features/geocoder'))
const supcommunity = new (require('./features/supcommunity'))
 
bot.on('message', (msg) => {
    if(!msg.member) return;
   if (msg.content.startsWith(`!help`)) {
       help.help_message(msg);
   }
   else if (msg.content.startsWith(`!fee`)) {
       fee.calculate_fee(msg);
   }
   else if (msg.content.startsWith(`!email`)) {
       email.generate(msg);
   }
   else if (msg.content.startsWith(`!address`)) {
       address.generate(msg);
   }
   else if (msg.content.startsWith(`!ebay`)) {
       ebay.generate(msg);
   }
   else if (msg.content.startsWith(`!meeting`)) {
       control.meeting(msg.channel.guild, msg, guild_name, logo_url)
   }
   else if (msg.content.startsWith(`!downloads`)) {
       downloads.list(msg)
   }
   else if (msg.content.startsWith(`!delay`)) {
       delay.send(msg)
   }
   else if (msg.content.startsWith(`!snowflake`)) {
       snowflake.convert(msg)
   }
   else if (msg.content.startsWith(`!convert`)) {
       curr.convert(msg)
   }
   else if (msg.content.startsWith(`!spoof`)) {
       geocoder.convert(msg)
   }
   else if (msg.content.startsWith(`!ping`)) {
       ping.send(msg)
   }
   else if (msg.content.startsWith(`!botbroker`)) {
       botbroker.scrape(msg)
   }
   else if (msg.content.startsWith(`!new`)) {
       control.ticket(guild, msg, config, msg.author, false)
   }
   else if (msg.content.startsWith(`!shoe`)) {
       shoe.convert(msg)
   }
   else if (msg.content.startsWith(`!sellout`)) {
       supcommunity.sellout(msg)
   }
   else if (msg.content.startsWith(`!droplist`)) {
       supcommunity.droplist(msg)
   }
   if (msg.member.hasPermission("ADMINISTRATOR")) {
       if (msg.content.startsWith(`!poll`)) {
           poll.send(msg)
       }
       else if (msg.content.startsWith(`!close`)) {
           msg.channel.delete();
       }
       else if (msg.content.startsWith(`!add `)) {
           control.add(msg, msg.content.split(" ")[1], guild_name, logo_url)
       }
       else if (msg.content.startsWith(`!remove`)) {
           control.remove(msg, msg.content.split(" ")[1], guild_name, logo_url)
       }
       else if (msg.content.startsWith(`!archive`)) {
           control.archive(msg.channel.guild, msg, guild_name, logo_url)
       }
       else if (msg.content.startsWith(`!giveaway`)) {
           giveaway.send(msg)
       }
       else if (msg.content.startsWith(`!ticketreact`)) {
           control.ticketreact(bot, msg, guild, config)
       }
       else if (msg.content.startsWith(`!embed`)) {
           embed.send(msg)
       }
       else if (msg.content.startsWith(`!reminder`)) {
           reminder.send(msg)
       }
       else if (msg.content.startsWith(`!rename`)) {
           if (msg.content.split(' ').length != 2) {
               const embed = new Discord.RichEmbed()
               embed.setTitle("Error")
               embed.setDescription("Your command is missing one or more arguments")
               embed.setColor("#36393F")
               msg.channel.send(embed)
           }
           else {
               msg.channel.setName(msg.content.split(' ')[1])
               const embed = new Discord.RichEmbed()
               embed.setTitle("Channel Name Changed")
               embed.setDescription(`The channel has been renamed to ${msg.channel}`)
               embed.setColor("#36393F")
               msg.channel.send(embed)
           }
       }
   }
});
 
bot.on('ready', () => {
   bot.user.setActivity("!help | invite me :) ")
});
 
// LOG IN
bot.login(process.env.BOT_TOKEN).then(() => {
   console.log('authorized in all servers');
});
