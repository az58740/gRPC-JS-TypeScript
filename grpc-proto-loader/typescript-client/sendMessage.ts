import  {client} from "./utils"
import {Channel,Message} from "../nodejs/chat_pb"


export default function sendMessage(){
    return new Promise<Message[]>((resolve,reject)=>{
       const channel=new Channel();
        channel.setName("defult");
        channel.setSendersName("defult");
      const strm=  client.joinChannel(channel);

      console.log(`Joined channel:: ${channel.getName()} \n`);
      const chunks: readonly Uint8Array[] | Buffer[] = [];
      const messages:Message[]=[];
        strm.on('data', (msg) => messages.push(msg));
        strm.on('error', (err) => reject(err));
        strm.on('end', () => resolve(messages));
      })
    }
        
    