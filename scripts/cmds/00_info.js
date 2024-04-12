const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "cliff",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "🐰𝚂𝙸𝚂𝙸🐰";
		const botPrefix = ".";
		const authorName = "𝗬𝗢𝗬𝗔🍭";
		const ownAge = "𝘀𝗲𝗰𝗿𝗲𝘁";
		const teamName = "Github team";
		const authorFB = "https://www.facebook.com/profile.php?id=100095262681590";
		const urls = JSON.parse(fs.readFileSync('cliff.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫✧
            ᘏ⑅ᘏ   .🎀°•⠀✶ . ࣪ ׅ ʬʬʬ.yoya.merch '🛍️ノ
           (๑•ᴗ•๑)つ 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 | 𝗜𝗡𝗙𝗢 ⪩⪨
           ━‌۫━‌۫∪━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫✧
\𝗡𝗔𝗠𝗘🐰: ${botName}
\𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫🐰: ${botPrefix}
\𝗢𝗪𝗡𝗘𝗥🐰: ${authorName}
\𝗔𝗚𝗘🐰: ${ownAge}
\𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞🐰: ${authorFB}
\𝗗𝗔𝗧𝗘🐰: ${date}
\𝗧𝗜𝗠𝗘🐰: ${time}
\𝗧𝗘𝗔𝗠: ${teamName}
\𝗨𝗣𝗧𝗜𝗠𝗘: ${uptimeString}
\━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌━‌۫━‌۫━‌۫━‌۫━‌۫✧`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
