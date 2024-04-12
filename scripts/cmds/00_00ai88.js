const axios = require('axios');
const fs = require('fs');

module.exports = {
		config: {
				name: "sisi88",
				version: "1.0.0",
				role: 0,
				author: "Jonell Magallanes",
				shortDescription: "EDUCATIONAL",
				countDown: 0,
				category: "other",
				guide: {
						en: '[question]'
				}
		},

		onStart: async function ({ api, event, args }) {
				const content = encodeURIComponent(args.join(" "));
				const apiUrl = `https://aiapiviafastapiwithimagebyjonellmagallanes.replit.app/ai?content=${content}`;

				if (!content) return api.sendMessage("Please provide your question.\n\nExample: ai what is the solar system?", event.threadID, event.messageID);

				try {
						api.sendMessage("🐰 | 𝙰𝙸 𝚂𝙸𝚂𝙸 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝚊𝚗 𝚊𝚗𝚜𝚠𝚎𝚛...", event.threadID, event.messageID);

						const response = await axios.get(apiUrl);
						const { request_count, airesponse, image_url } = response.data;

						if (airesponse) {
								api.sendMessage(`${airesponse}\n\n🍭 𝚛𝚎𝚚𝚞𝚎𝚜𝚝 𝚌𝚘𝚞𝚗𝚝: ${request_count}`, event.threadID, event.messageID);

								if (image_url) {
										const imagePath = './image.jpg';
										const imageResponse = await axios.get(image_url, { responseType: 'arraybuffer' });
										fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));

										api.sendMessage({ attachment: fs.createReadStream(imagePath) }, event.threadID, () => {
												fs.unlinkSync(imagePath); 
										});
								}
						} else {
								api.sendMessage("An error occurred while processing your request.", event.threadID);
						}
				} catch (error) {
						console.error(error);
						api.sendMessage("🐇 𝚑𝚊𝚕𝚊 𝚋𝚑𝚎 𝚖𝚊𝚢 𝚎𝚛𝚛𝚘𝚛...", event.threadID);
				}
		}
};
