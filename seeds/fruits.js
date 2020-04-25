exports.seed = async function(knex) {

  await knex("fruits").truncate()
  await knex("fruits").insert([
 
    {name:"banana" , avgWeightOz:1, delicious:true,color:"yellow"},
    {name:"test" , avgWeightOz:1, delicious:true,color:"green"},
  ])
};
