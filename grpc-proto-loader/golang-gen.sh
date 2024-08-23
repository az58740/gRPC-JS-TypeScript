#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/

PROTO_DEST=./golang

mkdir -p ${PROTO_DEST}

protoc \
    --go_out ${PROTO_DEST} \
    --go_opt=paths=source_relative \
    --go-grpc_out ${PROTO_DEST} \
    --go-grpc_opt=paths=source_relative \
    -I ./proto \
    proto/*.proto