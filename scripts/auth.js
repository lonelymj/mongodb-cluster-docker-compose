#!/bin/bash

mongosh <<EOF
use admin;
db.createUser({user: "mongo", pwd: "123456", roles:[{role: "root", db: "admin"}]});
exit;
EOF