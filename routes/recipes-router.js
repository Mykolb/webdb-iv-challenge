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

//GET RECIPES
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

//ADD RECIPES
router.post('/', (req, res) => {
    db('recipes')
    .insert(req.body, 'name')
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'There was an error creating the recipe'})
    })
  })


module.exports = router;