
/** --------------------------------------------
 *  Command :  help
 *  Category :  user
 *  Path :  ./userCommands/help.js
 *  Description :  Affiche toutes les commandes
 *  --------------------------------------------
*/



//  => imports


class Help {

  static run($KDB, $message, $args) {
    const prefix = $KDB.settings.prefix;
    const infos = `__**Help**__\n\n`
      + `__**General Commands**__\n`
      + `\`\`\``
      + `${prefix}animal : affiche une image random d'animal\n`
      + `${prefix}help   : affiche toutes les commandes\n`
      + `${prefix}info   : affiche les infos du bot ou du serveur\n`
      + `${prefix}ping   : renvoi 'pong'\n`
      + `${prefix}repeat : répète le message reçu\n`
      + `\`\`\``
      + `Tapez \`${prefix}help <command>\` pour plus de détails\n\n`
      + `Voir le README -> https://github.com/Kev-17/KDiscordBot/blob/master/README.md\n`
      + `Discord Officiel -> https://discord.gg/GwhVqCX\n\n`
      + `-----------------\n__©2019 KDiscordBot by K | @Supervisor#6934__\n`;
    const cmd = $args[0];
    if(!cmd) { $message.delete(); return $message.author.send(infos); }
    if(cmd === `help`) return $message.channel.send(`Commande invalide. Voir \`${prefix}help\` pour plus de détails`);
    if($KDB.hasCommand(cmd)) {
      const command = $KDB.getCommand(cmd);
      return $message.channel.send(command.help(prefix));
    } else return $message.channel.send(`Commande introuvable. Voir \`${prefix}help\` pour plus de détails`);
  }

}

module.exports = Help;

