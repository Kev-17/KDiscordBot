
/** ---------------------------------
 *  Command :  ping
 *  Category :  user
 *  Path :  ./userCommands/ping.js
 *  Description :  Renvoie 'pong'
 *  ---------------------------------
*/



//  => imports


class Ping {

  static run($KDB, $message, $args) {
    if($message.content === `${$KDB.settings.prefix}ping`)
      $message.channel.send(`\`pong\``);
  }

  static help($prefix) {
    const txt = `__**${$prefix}ping**__`
      + `\`\`\``
      + `Renvoi 'pong'\n`
      + `Category : user\n`
      + `Usage    : ${$prefix}ping\n`
      + `Exemple  : ${$prefix}ping\n`
      + `\`\`\``;
    return txt;
  }

}

module.exports = Ping;

