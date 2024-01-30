import { WebhookClient } from 'discord.js'

const webhookClient = new WebhookClient({
  url: 'https://discord.com/api/webhooks/1202027626764718110/IOc1RMG-KlS0ZI_sH5FBPe4iuVdQsIqprETptArYvPa_shvJ1x3oQWt2RFWwzIoWpCni'
})

webhookClient.send({
  content: 'Discord.js webhook test',
  username: 'DJS Webhook',
  avatarURL: 'https://i.imgur.com/KEungv8.png'
})
