exports.up = async function(knex) {
  // alterTable can update the table if exits
  await knex.schema.alterTable("fruits", table => {
    table.text("color");
  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable("fruits", table => {
    table.dropColumn("color");
  });
};

exports.down = async function(knex) {
  //    this how you reverse in the column in the table
  await knex.schema.alterTable("fruits", table => {
    table.dropColumn("color");
  });
};
