import {ChatRequest} from "../nodejs/chat_pb";
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
 const username =process.argv[0];  
if(!username) console.error("No username, can not join chat") , process.exit();
const metadata=new grpc.Metadata();
metadata.set("username",username)
const strm =client.chat(metadata)

    r1.on("line",(line)=>{
        if(line==="q"){
           r1.close()
        }else{
    const request=new ChatRequest();
    request.setMessage(line)
    strm.write(request)
        }
    })

}
