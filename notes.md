## migrations 

## DISH

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
      //create id 
      tbl.increments();
    //create name 
    tbl 
    .string('name', 128)
    .notNullable()
    .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};

## INGREDIENTS

exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      //create id
      tbl.increments();
    //create name 
    tbl
    .string('name', 128)
    .notNullable()
    .unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};


## RECIPES 


exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      //create id 
      tbl.increments();
      //create name 
      tbl
      .string('name', 128)
      .notNullable()
      .unique();
      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

     tbl 
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
     // tables with FK must be removed before the referenced table is removed
     return knex.schema
     .dropTableIfExists('recipes')
    
};


## SEEDS



## DISH

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'PB&J'},
        {id: 2, name: 'Chocolate Chip Cookies'},
        {id: 3, name: 'Smores'}
      ]);
    });
};

## INGREDIENTS

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'bread'},
        {id: 2, name: 'dough'},
        {id: 3, name: 'graham crackers'}
      ]);
    });
};


## RECIPES 

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

