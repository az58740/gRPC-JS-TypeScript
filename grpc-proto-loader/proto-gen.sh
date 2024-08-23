#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/

PROTO_DEST=./nodejs

mkdir -p ${PROTO_DEST}

yarn proto-loader-gen-types \
--grpcLib=@grpc/grpc-js \
--outDir=${PROTO_DEST}/ proto/*.proto