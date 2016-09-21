var followeeData = require('../db/followees.js')
var knex = require('knex')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('followees')
  .del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('followees').insert(followeeData)
      ]);
    });
};
