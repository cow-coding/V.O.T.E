# 알.쓸.선.잡 (알아두면 쓸모있는 선거 잡학사전 / V.O.T.E)
Kor Title : 알.쓸.선.잡 (알아두면 쓸모있는 선거 잡학사전)  
Eng Title : V.O.T.E (Vote Or The politicians Every informations) 


![npm ver](https://img.shields.io/badge/npm-7.13.0-01DF74)  ![express](https://img.shields.io/badge/express-4.17.1-088A68)  ![license](https://img.shields.io/badge/license-ISC-151515) 

## Introduction

:white_check_mark: V.O.T.E is a web application that provides information related to elections and politicians.

## How to use?

We use the GCP platform to release this application. Please download this servercode and check option.

### Check

server.js
```.js
var conn = mysql.createConnection({
  host: "your ip address",
  user: "your mysql user name",
  password: "your mysql password",
  database: "your election dataase name",
  multipleStatements: true,
  dialectOptions: {
    options: {
      rerquestTimeout: 3000,
    },
  },
});
```

Check your DBMS and AWS IP or GCP IP, and write that informations in file "server.js"

## Preview

![](https://github.com/ElectionInfo/electionInfo_server/blob/master/imgs/title1.png?raw=true)

This is main title of this application.  
If you click the hamburger button, you can check the menu.

![](https://github.com/ElectionInfo/electionInfo_server/blob/master/imgs/title2.png?raw=true)
