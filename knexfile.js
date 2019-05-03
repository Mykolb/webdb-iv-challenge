// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.db3', //folder will be created when we run the migrations
    },
    useNullAsDefault: true,
    },

    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
//sqlite does not enforce foreign keys by default !!!!!!
//add pool to enfore foreign keys constraints
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done);
      }
    }

  }















