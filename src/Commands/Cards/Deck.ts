import { BaseCommand, Command, Message } from '../../Structures'

@Command('deck', {
    description: "Displays user's deck",
    cooldown: 15,
    category: 'cards',
    usage: 'deck',
    exp: 10
})
export default class command extends BaseCommand {
    override execute = async (M: Message): Promise<void> => {
        const { deck, tag } = await this.client.DB.getUser(M.sender.jid)
        if (deck.length < 1) return void M.reply("You don't have any cards in your deck")
        if (M.numbers.length < 1 || M.numbers[0] > deck.length) {
            let text = `š *Deck*\n\nš“ *ID:*\n\tš® *Username:* ${M.sender.username}\n\tš§§ *Tag:* #${tag}\n`
            for (let i = 0; i < deck.length; i++)
                text += `\n*#${i + 1}*\nš *Name:* ${deck[i].name}\nš *Tier:* ${deck[i].tier}\n`
            const { image, tier } = deck[0]
            let buffer = await this.client.utils.getBuffer(image)
            if (tier === '6' || tier === 'S') buffer = await this.client.utils.gifToMp4(buffer)
            return void (await M.reply(
                buffer,
                tier === '6' || tier === 'S' ? 'video' : 'image',
                tier === '6' || tier === 'S',
                undefined,
                text
            ))
        } else {
            const i = M.numbers[0] - 1
            const { name, image, tier, description } = deck[i]
            let buffer = await this.client.utils.getBuffer(image)
            if (tier === '6' || tier === 'S') buffer = await this.client.utils.gifToMp4(buffer)
            const text = `š *Name:* ${name}\nš *Description:* ${description}\nš *Tier:* ${tier}`
            return void (await M.reply(
                buffer,
                tier === '6' || tier === 'S' ? 'video' : 'image',
                tier === '6' || tier === 'S',
                undefined,
                text
            ))
        }
    }
}
