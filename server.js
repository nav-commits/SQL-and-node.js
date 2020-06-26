const express = require("express");
const mysql = require('mysql');
const app = express();
require('dotenv').config()
let port = process.env.PORT || 3000;

const databaseCon = process.env.DATABASE_CONNECTION;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;

// create connection 
let connection = mysql.createConnection({
    host:`${host}`,
    user:`${databaseCon}`,
    password: `${password}`,
    database: `${database}`

});

connection.connect((err) => {
  if (!err) console.log('Database is connected!');
  else
    console.log(
      'Database not connected! : ' + JSON.stringify(err, undefined, 2)
    );
});

app.get('/end', (req,res )=>{

connection.query('SELECT * FROM data', (err,rows, fields) => {
    console.log(rows);
    if(!err)
     res.send(rows);
     
     else
     console.log(err);
    })
});

app.listen(port, () =>{
  console.log(`port is runing on ${port}`);
})