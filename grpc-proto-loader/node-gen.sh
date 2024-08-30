#!/bin/bash

#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/

PROTO_DEST=./nodejs

mkdir -p ${PROTO_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=E:/GOLANG/gRPC_Typescript/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \
    -I ./proto \
    proto/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=E:/GOLANG/gRPC_Typescript/node_modules/.bin/protoc-gen-ts.cmd \
    --ts_out=${PROTO_DEST} \
    -I ./proto \
    proto/*.proto