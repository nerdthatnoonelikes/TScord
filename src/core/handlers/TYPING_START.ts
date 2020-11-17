import {Client} from '../client/Client';
import { Payload } from '../../constants/Payloads';

export default function(client: Client, payload: Payload) {
    client.emit('typingStart');
}