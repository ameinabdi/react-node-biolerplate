import mysql from 'mysql';
/// Connections
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'amouduniversity_teacher', 
    port: 3307
});

connection.connect(function(err:any){
if(!err) {
    console.log("Database is connected");
} else {
    console.log(err);
    console.log("Error while connecting with database");
}
});



export = connection;
