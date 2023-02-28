1) We install MongoDB using the following steps:
	
	- Download MongoDB community server from:		https://www.mongodb.com/try/download/community
	- Download MongoDB shell from:  			https://www.mongodb.com/docs/mongodb-shell/install/
	- (Alternative: use Mongodb atlas)

2) important commands for MongoDB console: (just for curiosity of how the database works)

	- mongosh : enters the Mongo DB shell and lets users interact with the database. it also shows the version of MongoDB and Mongosh currently installed,
	- show dbs: show all the available information inside the shield such as our databases and other info such as admin, config, local.
	- use [name_of_database] : allows to create a new DB
	- show collections : shows all the info inside the specified database
	- db.users.insertOne({JSON_format}) : inside the closed brackets we enter our JSON. we can only insert one JSON at a time
 	- db.users.insertMany([{JSON1},{JSON2},...,{JSON_K}) : Same as insert one but in an array like format each json is defined inside the {}
	- db.users.find() : Gives all data (also known as documents) stored in the db
	- db.users.find().sort({Atribute1: 1/-1 , Atribute2: 1/-1, Atribute_k: 1/-1}) : Allows to sort the files in ascendent "1" or descendent "-1" order
	- db.users.find().sort().limit(k) : with the limit function we can limit the number of results to display being k a positive integer
	- db.users.find({Atributes: "Atribute we are looking for"},{atributes: 1/0}) : , if we insert the atributes inside it returns the documents with that information, the 1/0 is wether we want to display certain info  
	- db.users.deleteOne({Atributes}) : deletes the documents with the defined atributes
	- db.dropDatabase() : deletes the current database
	- exit : exits Mongosh and returns to the current directory on console 

	-for a full list of query here is the following document:   https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm


3) Install Node.js on the computer

4) dependencies added:
	-npm init				 	->we initialize the package.json file
	-npm i express mongoose        	->we add the express and mongoDB dependencies
	-npm --save-dev dotenv nodemon 	->This allow to constantly check the output of the saved file
	-npm i ejs					->we add ejs dependencies (just for testing and visualizing the behaviour of the back-end)
	-npm run [script name: devStart]	->we run the script to be checked by nodemon
	-npm install --save express path handlebars express-handlebars @handlebars/allow-prototype-access body-parser       -> Express js dependencies for ease in use

5) for a little of Front-end visualization and testing of the back-end we included the views folder which includes the ejs file and bootstrap

	-we copy this on the head structure of the ejs file: 
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    		rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    		crossorigin="anonymous">
		
6) Definition of files and folders
    -models folder has the definition of the database for all users
	-routes folder has the route for all different tabs needed
	-views folder has the ejs components of the login, menu, check profile and create a new user
	- Server.js is where we initialize all the components we use.
		





