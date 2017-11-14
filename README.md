# GetServed
Simple server in NodeJs and Express

# Creating a server and hosting it locally! (GetServed)

First we need to add a few things to our software toolbelt:
* Install Node (A server side platform)

	Windows: [Press me!](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    
    MacOS: First install brew [here](https://brew.sh/), then type the following command in your terminal: 
    ```javascript
    brew install node
    ```
* Install Atom [here](https://atom.io/)
* Install ngrok [here](https://ngrok.com/download)

# Let's make a little website to host!
(Or maybe we can use that fun timer we made last time!!!!!)
* We need to make a local copy of the github repository that was made for this lesson first so we have somethings to work with!
* Open up your command line and type
```
git clone https://github.com/UAHakron/GetServed.git
```
* Open up brackets or atom and open the folder we just cloned
* Then open up the file index.js
* This file contains all the code of our server. We are using a framework called Express to manage the server interactions. 

When a web browser contacts our server, the ```app.get``` function is called. This function simply returns back to the browser our index.html file! You can define all kinds of different functions to do different operations on the sever.
* Before we can start the server, we need to install one more thing through NPM, so back to the command line!

NPM stands for Node Package Manger and its a way to manage packages used by Node.js. The one package we need here is called Express js. To install it, type ```npm install -g express```
* To start the server type  ```node index.js``` into the command line
* Now that we have the backend of the website! Lets see it in our browser! Type this line into your browser: 
```
localhost:3000
```
* Notice that you've seen this 3000 number somewhere before! That's the port we've decided to use and this can be found on line 2 of index.js 


* BUT WHAT IF YOU WANNA MAKE SOMETHING MORE PERSONAL?
* Check out our friend's personal website he made through github: [clik me up](https://pascalrascal.github.io/)

# Let's make our *own* website!
* Lets look at a new file called itme.html
* We can host it locally with the index.js file to see what it does 
* We'll just have to change a few lines!!1 Erase lines 17-25. AKA, these ones:
```
app.get('/js/:filename', function(req, res) {
    console.log(req.params.filename);
   res.sendFile(path.join(__dirname, 'js/' + req.params.filename)); 
});

app.get('/css/:filename', function(req, res) {
    console.log(req.params.filename);
   res.sendFile(path.join(__dirname, 'css/' + req.params.filename)); 
});
```

* And then let's comment the index.html out for now and add a different line:
```
app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.sendFile(path.join(__dirname, 'itme.html'));
```
* Now we have the beginnings to an html website that could be great someday!
* We can add tons of fun features! Lets hop on over to a great resource and see if there's anything cool we want to add! [Click me! Click me!](https://www.w3schools.com/html/default.asp)

# Now that we have a little website, lets make it accessible from anywhere!
To accomplish this we'll use a great tool called ngrok. Typically to host a website, you would need to buy a domain name and setup your server on a cloud platform; I'll show you how to do that in a little bit.

BUT if you don't want to pay for all that hosting and you're say, at a hackathon, you can use something like ngork instead. Ngrok connects your local server (the one that we say on localhost:3000) to the internet at large. 

* First unzip the ngrok file you downloaded before and save it at a convenient location like your Desktop
* Start your server like we did above in the GetServed directory, with 
 ```
 node index.js
 ```
 * Double click on the ngrok file you downloaded and a comand prompt will open
 * Finally, type 
 ```
 ngrok.exe http -3000
```
* Then navigate to the link ngrok created, and BOOM there's your website, on the internet for everyone to enjoy! :)
