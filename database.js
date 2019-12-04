var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "users.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO user (name, email) VALUES (?,?)'
            db.run(insert, ["mw","mwveliz@gmail.com"])
            db.run(insert, ["test","test@test.com"])
        }
    })  
    }
})


module.exports = db

