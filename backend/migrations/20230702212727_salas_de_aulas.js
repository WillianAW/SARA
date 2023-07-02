/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('salas_de_aulas', function (table) {
        table.increments('id')
        table.integer('sala').notNullable()
        table.integer('aluno_id').unsigned()
        table.foreign('aluno_id').references('alunos.id')
        table.integer('professor_id').unsigned()
        table.foreign('professor_id').references('professores.id')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('salas_de_aulas');
};
