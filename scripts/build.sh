#!/bin/bash

export NODE_ENV="production"

yarn tsc --emitDeclarationOnly
yarn node ./main.js
