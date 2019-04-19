# liri-node-app

### This is the steps I have taken 

### I have run npm init 
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (liri-node-app)
version: (1.0.0)
description:
entry point: (keys.js)
test command:
git repository: (https://github.com/clark1472/liri-node-app.git)
keywords:
author: Christen Clark
license: (ISC)
About to write to c:\Users\chris\Desktop\ClassAssignments\10-nodejs\02-Homework\liri-node-app\package.json:

{
  "name": "liri-node-app",
  "version": "1.0.0",
  "description": "",
  "main": "keys.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/clark1472/liri-node-app.git"
  },
  "author": "Christen Clark",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/clark1472/liri-node-app/issues"
  },
  "homepage": "https://github.com/clark1472/liri-node-app#readme"
}


Is this OK? (yes) */
### I now have a package.json file.

### ran node spotify api
$ npm install --save node-spotify-api
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN liri-node-app@1.0.0 No description

+ node-spotify-api@1.1.1
added 54 packages from 64 contributors and audited 72 packages in 3.288s
found 0 vulnerabilities 
I have received api key. It is mh185z2b3ub0mwaygk600iy3n

I have added axios to terminal.
npm install axios
npm WARN liri-node-app@1.0.0 No description

+ axios@0.18.0
added 5 packages from 8 contributors and audited 77 packages in 1.253s
found 0 vulnerabilities

Looked at Moment.js does not have install command. why?

dotenv loaded
npm install dotenv
npm WARN liri-node-app@1.0.0 No description

+ dotenv@7.0.0
added 1 package and audited 78 packages in 1.243s
found 0 vulnerabilities

Noticed on package.json dependencies have 
  "axios": "^0.18.0",
  "dotenv": "^7.0.0",
  "node-spotify-api": "^1.1.1"

I have made a .gitignore file. Used touch command on terminal.
touch .gitignore
Added files to be ignored to .gitignore.
```
node_modules
.DS_Store
.env
```
### Looked up what version of npm I have
 npm version
{ 'liri-node-app': '1.0.0',
  npm: '6.4.1',
  ares: '1.15.0',
  cldr: '33.1',
  http_parser: '2.8.0',
  icu: '62.1',
  modules: '64',
  napi: '3',
  nghttp2: '1.34.0',
  node: '10.15.3',
  openssl: '1.1.0j',
  tz: '2018e',
  unicode: '11.0',
  uv: '1.23.2',
  v8: '6.8.275.32-node.51',
  zlib: '1.2.11' }

  ### made a .env file
touch .env