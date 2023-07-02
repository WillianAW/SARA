// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'gerenciamento_de_salas',
      user:     'root',
      password: '123456'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
