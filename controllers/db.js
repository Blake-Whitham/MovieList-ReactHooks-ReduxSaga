const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'movies'
})

connection.connect()

module.exports = {

  post: (req, res) => {
    connection.query(`INSERT INTO movie
      (title, watched, release_date, poster_path, overview)
      VALUES ("${req.body.title}", 0,"${req.body.release_date}",
      "${req.body.poster_path}","${req.body.overview}")`,
      (err) => {
      if (err) {
        console.log(err)
        res.status(400)
      } else {
        res.sendStatus(201)
      }
    })
  },


  patch: (req, res) => {
    connection.query(`UPDATE movie SET watched = ${req.body.watched} WHERE id = ${req.body.id}` , (err, data) => {
      if (err) {
        console.log(err)
        res.status(400)
      } else {
        res.sendStatus(201)
      }
    })
  },

  get: (req, res) => {
    connection.query(`SELECT * FROM movie`, (err, data) => {
      if (err) {
        res.status(400)
      } else {
        res.status(200).send(data)
      }
    })
  }
}