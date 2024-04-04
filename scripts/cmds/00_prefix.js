module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `█▄█ █░█ █▄░█ █▀█\n░█░ █▄█ █░▀█ █▄█
𝗵𝗶 𝗵𝗼𝗻𝗲𝘆, 𝗶𝗺 𝘆𝘂𝗻𝗼, 𝗮𝗻𝗴 𝗣𝗢𝗚𝗜𝗡𝗚 𝗕𝗢𝗧 𝗻𝗶 𝗠𝗮𝘀𝘁𝗲𝗿 𝗬𝗢𝗬𝗔/𝗔𝗬𝗠𝗜, \n 𝗨𝗦𝗘 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 [ 𓆩 * 𓆪 ]\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
╰┈➤*help [number of page] -> see commands
╰┈➤*sim [message] -> talk to bot
╰┈➤*callad [message] -> report any problem encountered
╰┈➤*help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\n𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥: 𝙔𝙊𝙔𝘼 $ 𝘼𝙔𝙈𝙄`,
 });
 }
 }
}
