exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('followees', function (table) {
    table.integer('user_id').primary
    table.integer('followee_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('followees')
};
