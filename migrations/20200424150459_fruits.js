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

exports.down = async function(knex) {};
