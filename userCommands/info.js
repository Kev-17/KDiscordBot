
/** ------------------------------------------------------
 *  Command :  info
 *  Category :  user
 *  Path :  ./userCommands/info.js
 *  Description :  Affiche les infos du bot ou du serveur
 *  ------------------------------------------------------
*/



const { MessageEmbed } = require(`discord.js`);


class Info {

  static run($KDB, $message, $args) {
    const embed = new MessageEmbed();
    const option = $args[0];
    $args = $args.slice(1);
    if(!option) return $message.channel.send(this.help($KDB.settings.prefix));
    switch(option) {
      case `bot`:
          embed.setDescription($KDB.user.username)
          // .setColor("#dc143c")
          .setThumbnail($KDB.user.avatarURL())
          .addField('Tag', $KDB.user.tag)
          .addField('Date de Création', $KDB.user.createdAt)
          .setFooter(`Serveur Officiel -> https://discord.gg/GwhVqCX`)
          .setTimestamp();
        $message.channel.send(embed);
        break;
      case `server`:
        embed.setDescription($message.guild.name)
          // .setColor("#dc143c")
          .setThumbnail($message.guild.iconURL())
          .addField('Membres', $message.guild.memberCount)
          .setFooter($message.guild.owner.user.tag, $message.guild.owner.user.avatarURL())
          .setTimestamp();
        $message.channel.send(embed);
        break;
      default: $message.channel.send(`Commande introuvable. Voir \`${$KDB.settings.prefix}help info\` ou \`${$KDB.settings.prefix}info\``);
    }
  }

  static help($prefix) {
    const txt = `__**${$prefix}info**__`
      + `\`\`\``
      + `Affiche les infos du bot ou du serveur\n`
      + `Category : user\n`
      + `Usage    : ${$prefix}info <option>\n`
      + `Options  : bot | server\n`
      + `Exemple  : ${$prefix}info bot\n`
      + `\`\`\``;
    return txt;
  }

}

module.exports = Info;

