const Discord = require('discord.js');
class Email {
	async generate(msg) {
		msg.delete(500)
		const embed = new Discord.RichEmbed();
		embed.setTitle("Email Changer")
		if (msg.content.split(" ").length == 2) {
			var one = Math.round(Math.random() * 9);
			var two = Math.round(Math.random() * 9);
			var three = Math.round(Math.random() * 9);
			var four = Math.round(Math.random() * 9);
			var pre_email = msg.content;
			var pre_email = pre_email.split(" ");
			var pre_email = pre_email[1];
			var split = pre_email.split("@");
			var number = "+" + one.toString() + two.toString() + three.toString() + four.toString();
			var email = split[0] + number + "@" + split[1]
			embed.setColor('#36393F');
			embed.setDescription(email);
			msg.author.send(embed);

			const mbed = new Discord.RichEmbed();
			mbed.setTitle("Email Changer")
			mbed.setColor('#36393F');
			mbed.setDescription('Email Address Changer used! Type `!email <address>` to use it!');
			msg.channel.send(mbed);
		} else {
			const embed = new Discord.RichEmbed();
			embed.setColor('#36393F');
			embed.setDescription('Please input one email at a time');
			msg.author.send(embed);
		}
	}
}

module.exports = Email;
