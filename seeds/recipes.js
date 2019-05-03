exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'S', dish_id: '2', ingredient_id: '5'}, // has to include the name field and it needs to be different or it will throw an err
        {name: 'W', dish_id: '3', ingredient_id: '6'},
        {name: 'T', dish_id: '4', ingredient_id: '7'}
      ]);
    });
};

