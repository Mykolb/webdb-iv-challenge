
const router = require('express').Router();

const db = require('./dishes-model')


//GET 
//WORKING
router.get('/', (req, res) => {
    db.find() //has to be the same name as the table name 
    .then(dishes => {
        console.log('dish')
        res.status(200).json(dishes)
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Dishes could not be found'})
    })
})

//GET by ID
router.get('/:id', (req, res) => {
  const id = req.params.id 
  db.findById()
    //  .first()
     .then(dish => {
         if(dish) {
           res.status(200).json(dish);
         } else {
         res.status(404).json({ message: 'The dish associated with this id cannot be found' });
         }
     })
     .catch(err => {
         res.status(500).json({ error: err, message: 'There was an error retrieving the data'})
     })
 });



//ADD A DISH
//WORKING
router.post('/', (req, res) => {
  db.add()
  .insert(req.body, 'name')
  .then(id => {
      res.status(201).json(id)
  })
  .catch(err => {
      res.status(500).json({ error: err, message: 'There was an error creating the data'})
  })
})





module.exports = router;