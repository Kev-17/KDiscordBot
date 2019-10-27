
/** ----------------------------------------------
 *  Command :  animal
 *  Category :  user
 *  Path :  ./userCommands/animal.js
 *  Description :  Renvoie une image d'un animal
 *  ----------------------------------------------
*/



const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`);


class Animal {

  static async run($KDB, $message, $args) {
    const embed = new MessageEmbed();
    switch($args[0]) {
      case `cat`:
        const cat = await fetch(`http://aws.random.cat/meow`).then(res => res.json()).then(json => json.file);
        embed.setImage(cat).setFooter(`Source: http://aws.random.cat/meow`);
        $message.channel.send(embed);
        break;
      case `dog`:
        const dog = await fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json()).then(json => json.message);
        embed.setImage(dog).setFooter(`Source: https://dog.ceo/api/breeds/image/random`);
        $message.channel.send(embed);
        break;
      case `fox`:
        const fox = await fetch(`https://randomfox.ca/floof/`).then(res => res.json()).then(json => json.image);
        embed.setImage(fox).setFooter(`Source: https://randomfox.ca/floof/`);
        $message.channel.send(embed);
        break;
      default: $message.channel.send(`Commande introuvable. Voir \`${$KDB.settings.prefix}help animal\` pour plus de détails`);
    }
  }

  static help($prefix) {
    const txt = `__**${$prefix}animal**__`
      + `\`\`\``
      + `Affiche une image random d'animal\n`
      + `Category : user\n`
      + `Usage    : ${$prefix}animal <option>\n`
      + `Options  : cat | dog | fox\n`
      + `Exemple  : ${$prefix}animal cat\n`
      + `\`\`\``;
    return txt;
  }

}

module.exports = Animal;

