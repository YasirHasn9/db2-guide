// since we are dealing with promises we are gonna use the async/await
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", table => {
    //   now making a columns
    // table.integer("id").notNull().unique().primary() // table.increments("id")
    table.increments("id");
    table
      .text("name")
      .notNull()
      .unique();
    table.float("avgWeightOz").notNull();
    table.boolean("delicious").defaultTo(1);
  });
};

exports.down = async function(knex) {
  // when we create the data , the order would go from up to low
  // so th reverse the order , knex helps us with this function
  await knex.schema.dropTableIfExists("fruits");
};
