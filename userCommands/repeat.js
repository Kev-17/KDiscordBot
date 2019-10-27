
/** ----------------------------------------
 *  Command :  repeat
 *  Category :  user
 *  Path :  ./userCommands/repeat.js
 *  Description :  Répète le message reçu
 *  ----------------------------------------
*/



//  => imports


class Repeat {

  static run($KDB, $message, $args) {
    $message.delete()
    $message.channel.send($args.join(` `));
  }

  static help($prefix) {
    const txt = `__**${$prefix}repeat**__`
      + `\`\`\``
      + `Répète le message reçu\n`
      + `Category : user\n`
      + `Usage    : ${$prefix}repeat <msg to repeat>\n`
      + `Exemple  : ${$prefix}repeat Hey salut toi !\n`
      + `\`\`\``;
    return txt;
  }

}

module.exports = Repeat;

