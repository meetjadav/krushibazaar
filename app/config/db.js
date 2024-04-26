const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "krushibazaar"

})

db.connect(err => {
    if (err) {
        console.error("Error connection mysql database:", err);
    }
    else {
        console.log("connected to MySql database");
    }
})

module.exports = db;
