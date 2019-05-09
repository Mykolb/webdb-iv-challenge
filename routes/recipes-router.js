const router = require('express').Router();

const db = require('./recipes-model')

//GET RECIPES
//Working
router.get('/', (req, res) => {
    // db('recipes') //has to be the same name as the table name
     db.find()
    .then(recipes => {
        console.log('recipes')
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Recipes could not be found'})
    })
})

//ADD RECIPES
//Working
router.post('/', (req, res) => {
    // db('recipes')
    db.add()
    .insert(req.body, 'name')
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'There was an error creating the recipe'})
    })
  })


module.exports = router;