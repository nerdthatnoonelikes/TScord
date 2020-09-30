import {token} from '../../token.json';
import { client } from '../index';
const Client = new client(token);

Client.on('ready', () => {
    console.log('logged in');
});

Client.on('message', async (message: any) => {
    if (message.content === '!hello') {
        Client.createMessage('hello', message.channel_id);
    }

    if (message.content === '!embed') {
        Client.createEmbed('description', message.channel_id,'title');
    }

});

