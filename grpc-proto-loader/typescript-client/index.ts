import {Channel,Message} from "../nodejs/chat_pb";
import joinChannel from "./joinChannel";
import * as grpc from "@grpc/grpc-js"
import * as readline from 'readline';
import  {client} from "./utils"

const deadline=new Date()
deadline.setSeconds(deadline.getSeconds()+5)
client.waitForReady(deadline,(err)=>{
    if (err){
        console.error(err)
        return
    }
    run()
});

 async function run() {
   const r1=  readline.createInterface({
    input:process.stdin,
    output:process.stdout
   } )
   const channel=new Channel();
   channel.setName("defult");
   channel.setSendersName("defult");
 const strm =  await client.joinChannel(channel);
    strm.on("data",(chunk)=>{
        console.log(`Joined channel:: ${chunk} \n`);
    })


        
    r1.on("line",(line)=>{
        if(line==="quit"){
           r1.close()
        }else{
            console.log(line)
        }
    })

}
