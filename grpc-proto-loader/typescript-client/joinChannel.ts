import  {client} from "./utils"
import {Channel,Message} from "../nodejs/chat_pb"


export default function joinChannel(){
    return new Promise<Message>(()=>{
       const channel=new Channel();
        channel.setName("defult");
        channel.setSendersName("defult");
      const strm=  client.joinChannel(channel);
      
      
     // console.log(`Joined channel:: ${channel.getName()} \n`);
      })
    }
        
    