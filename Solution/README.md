# Exercise Express and Lowdb
The goal of the exercise is for the students to practice the concepts for Express and lowdb learned in class. The exercise consist in the creation of the complete application with server, backend and frontend. The main objectives are:

 - Get data from data base and show it on a table in html
 - Send data from a form to the data base and update the table
 - Delete data from the table and from the data base

The exercise is divided in tasks for a better understanding

## Part 1 - The server

The first thing to do is create the server. For this we use the command`npx express-generator Table-lowdb --no-view --git`. After that run `npm install` and then `npm install lowdb` to install the data base. Create a folder called data and create a file `data.json` in it. Then follow the next steps.

 1. Create a file call `api.js` inside the routers folder
 2. Inside this file import express and define a variable called router for express.router()
 3. Next, lets import the data base and FileSync from `lowdb`.
 4. Next, define a variable called adapter that will be equal to `new FileSync('data/data.json')`
 5. Now define the data base variable, call it db and will be equal to `low(adapter)`. 
 6. Your code should look like: 
				 
				 const  express  =  require('express'); //Step 2
				 const  router  =  express.Router(); //Step 2
				 const  low  =  require('lowdb') //Step 3
				 const  FileSync  =  require('lowdb/adapters/FileSync') //Step 3
				 const  adapter  =  new  FileSync('data/data.json')//Step 4
				 const  db  =  low(adapter) //Step 5
				 
 7.  Next obtain the an array called list from the data base. For this use the `db.get()` function from the `lowdb` module.
 8. The to send this data, use the function `router.get('url',function(req,res,next){}`. This function will get in which url the user is, and if it coincides with the url passed as a parameter, then the function inside will be executed. Use this function and as the url use `'/'`. using `'/'` means that by default this function will be executed if the url has not be changed.
 9. Inside this function send the data as json, for this use the function `res.json(data)`.
 10. Finally export the router function 
 11. **OPEN THE APP.JS FILE** and there import the new `api.json` file. 
 12. Then use the function from express `app.use('url',function)` and as url use `'/api'` and as function send the file that you imported in the step 11.

## Part 2. Front End
In this part of the task, you have to create a the main html and a script in Javascript to fetch the data from and to the back end. 

 1. Use the file `index.html` inside the public folder. In this File you have to create a form to post the data to the data base. This form should have minimum 5 fields, one should be an ID number and the other fields are up to you. Be creative! :D. Remember to give some names to these inputs so we can obtain the data in the back end. Also create a default object in your `data.json` with the same fields as your form. This object should be inside an array called `list`.
 2. The idea is to have a table in the html showing the content of the data base. This table should be dynamic because the content of the database will be changing all the time. That is why you just need to create the table tag, with an empty `<thead>` and `<tbody>` each one with an ID so can be obtained in the Javascript file.
 3. Next create a way to delete data from the table. The way of doing it is up to you. but here are some ideas: 1. Create a form with just one input, in which the user write the id of the item that the user wants to erase. 2. You can create an onclick event in the row of the table, so the user click the table and erase the desired item. Each time the user clicks a row, you call a function in the Javascript file that fetch post data to the back end and erase the desired item.
 4. **CREATE A NEW JAVASCRIPT FILE** inside the Javascripts folder. inside this file you will create two main functions. One to obtain data from the database and the other create the dynamic table.
 5. Create a function called `obtain_data()` . Inside the function use fetch to get the data. The url to use is `'/api'`. Inside the fetch function obtain the data as json and send it to a new function called `create_table(data)`.
 6. Inside the `create_table(data)` function, obtain the `<thead>` and `<tbody>` elements from the html
 7. create two variables `thead_content` and `tbody_content` and make them equal to empty strings.
 8. Now you need to fill this two variables dynamically with the respective content. For example `thead_content` should be something like:


		<thead>
			<tr>
				<td>Title1</td>
				.
				.
				.
			</tr>
		</thead>	

	These titles can be obtained by using the function `Object.Keys(data[0])` 
 10.  Then we do something similar with the `tbody_content`

## Part 3. Back End


> Written with [StackEdit](https://stackedit.io/).