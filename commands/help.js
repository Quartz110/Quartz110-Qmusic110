const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}p <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${PREFIX}l\` : **Şarkı sözlerini bulur.**
\`${PREFIX}s\` : **Sıradaki Şarkıyı atlar.**
\`${PREFIX}d\` : **O Anki şarkıyı Hep tekrarlar.**
\`${PREFIX}dur\` : **O anki Şarkıyı Durdurur.**
\`${PREFIX}r\` : **Duran Şarkıyı Devam Ettirir.**
\`${PREFIX}q\` : **O Anki Sırayı Gösterir.**
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**

`)
                      )    
}
}
