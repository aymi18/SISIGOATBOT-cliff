module.exports = {
config: {
  name: "goiadmin",
  aurthor:"?/zed",// Convert By Goatbot Zed
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "100095262681590") {
    var aid = ["100095262681590"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wala tulog pa sya.", "My MASTER is currently unavailable 🤧", "Sorry, MASTER is offline 😪","tama kana"," Another tag in my master, i will punch you 🙂"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  };