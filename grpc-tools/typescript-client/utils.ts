import {ChatServiceClient} from "../nodejs/chat_grpc_pb"
import {credentials} from "@grpc/grpc-js"

const port = 5400 ;
export const client = new ChatServiceClient(
    `localhost:${port}`,
    credentials.createInsecure()
);
export const noop=()=>{}