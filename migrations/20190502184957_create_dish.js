
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