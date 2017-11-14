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
* Open up brackets or atom
* 
*
*
*
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
