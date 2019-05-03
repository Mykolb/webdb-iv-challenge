
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
