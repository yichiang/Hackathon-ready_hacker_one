# <p align="center">Ready Hacker One Web Service! 
<img src="https://octodex.github.com/images/stormtroopocat.jpg" width="410"></p>
## <p align="center">Created by: Yi, Andy, Joe, & Claire </p>
### <p align="center">Ready Hacker One Hackathon by Exsilo in Redmond, WA (June 30th, 2018-July 1st, 2018)</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonnie's Famous Vegan Diner is known for excellent dishes created by autonomous chefs. With advanced robotics, almost everything in the restaurant is operated by machines -  cooking, serving, and cleaning. The remaining manual element is the ordering process. This web application allows customers to create orders from their own devices via a web application. Our software integrates nicely with the diners facial recognition software that ties customers to their account profile. As soon as they walk into the diner, we know who they are! 

***
# Requirements: 
### Node
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

```
$ node --version
v0.10.24

$ npm --version
1.3.21
```

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.
*** 
# Installation: 
```
$ git clone https://github.com/josephkniest/ready-hacker-one-web-service.git
$ cd ready-hacker-one-web-service
$ npm install
```
## Start & watch
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start Server
```    
$ cd serv
$ node server.js
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Run Application
```    
$ cd web
$ npm start
```
## Update sources

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To run those 3 commands you can just do

    $ npm run pull
***
# Built With:
- #### HTML, JavaScript ([React](http://facebook.github.io/react) is used for UI), CSS, & MySQL

--- 
# Acknowledgements:
- #### Thank you to [Exsilio](http://www.exsilio.com/) & [Orange Studios](http://www.orangestudios.com/) for hosting an unforgettable 24 hour hackathon!



