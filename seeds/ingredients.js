exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'bread'},
        { name: 'dough'},
        { name: 'graham crackers'}
      ]);
    });
};
