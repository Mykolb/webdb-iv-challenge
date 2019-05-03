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

router.get('/', (req, res) => {
    db('recipes') //has to be the same name as the table name 
    .then(recipes => {
        console.log('recipes')
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Recipes could not be found'})
    })
})




module.exports = router;