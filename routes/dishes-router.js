const knex = require('knex');
const router = require('express').Router();

const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.db3',
    },
    useNullAsDefault: true, // needed for sqlite
  };

const db = knex(knexConfig);


//GET 
router.get('/', (req, res) => {
    db('dish') //has to be the same name as the table name 
    .then(dishes => {
        console.log('dish')
        res.status(200).json(dishes)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Dishes could not be found'})
    })
})

//ADD A DISH
router.post('/', (req, res) => {
  db('dish')
  .insert(req.body, 'name')
  .then(id => {
      res.status(201).json(id)
  })
  .catch(err => {
      res.status(500).json({ error: err, message: 'There was an error creating the data'})
  })
})




module.exports = router;