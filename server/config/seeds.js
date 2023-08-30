const db = require("./connection");
const { Customer, Pizza } = require("../model");

db.once("open", async () => {
  await Pizza.deleteMany();

  const pizza = await Pizza.insertMany([
    {
      pizzaName: "Cheese",
      pizzaType: "Hand Tossed",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 10.99,
      quantity: 20,
    },
    {
      pizzaName: "Pepperoni",
      pizzaType: "Hand Tossed",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 12.99,
      quantity: 20,
    },
    {
      pizzaName: "Neapolitan Pizza",
      pizzaType: "Thin Crust",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 13.99,
      quantity: 20,
    },
    {
      pizzaName: "Sicilian Pizza",
      pizzaType: "Square & Thick",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 15.99,
      quantity: 20,
    },
    {
      pizzaName: "Veggie Pizza",
      pizzaType: "Hand Tossed",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 15.99,
      quantity: 20,
    },
    {
      pizzaName: "Margherita Pizza",
      pizzaType: "14 inch only The Buono's Way",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 16.99,
      quantity: 20,
    },
    {
      pizzaName: "Meat Lovers Pizza",
      pizzaType: "Hand Tossed",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 18.99,
      quantity: 20,
    },
    {
      pizzaName: "Ziti Pizza",
      pizzaType: "16 inch",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 18.99,
      quantity: 20,
    },
    {
      pizzaName: "THE WORKS aka Supreme Pizza",
      pizzaType: "Hand Tossed",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 18.99,
      quantity: 20,
    },
    {
      pizzaName: "Gluten Free Pizza",
      pizzaType: "Thin Crust",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 18.99,
      quantity: 20,
    },
    {
      pizzaName: "Cauliflower Crust Gluten Free Pizza",
      pizzaType: "This Crust",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 18.99,
      quantity: 20,
    },
  ]);

  console.log("pizzas seeded");

  await Customer.deleteMany();

  await Customer.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await Customer.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
