import { Command, BaseCommand, Message } from '../../Structures'
import { AnyMessageContent } from '@adiwajshing/baileys'

@Command('mods', {
    description: 'Disaplays the users which moderates the bot',
    category: 'general',
    cooldown: 15,
    exp: 100,
    usage: 'mods',
    aliases: ['moderators']
})
export default class command extends BaseCommand {
    override execute = async (M: Message): Promise<void> => {
        let text = '🌠 *Shooting-Star Moderators* 🌠\n'
        this.client.config.mods.forEach((mod) => (text += `\n*❯ @${mod.split('@')[0]}*`))
        return void (await this.client.sendMessage(
            M.from,
            {
                text,
                mentions: this.client.config.mods,
                contextInfo: {
                    externalAdReply: {
                        title: '',
                        thumbnail: this.client.assets.get('shooting-star'),
                        mediaType: 1
                    }
                }
            } as unknown as AnyMessageContent,
            {
                quoted: M.message
            }
        ))
    }
}
