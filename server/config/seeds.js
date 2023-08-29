const db = require("./connection");
const { Customer, Pizza } = require("../model");

db.once("open", async () => {
  await Pizza.deleteMany();

  const pizza = await Pizza.insertMany([
    {
      pizzaName: "Pepperoni",
      pizzaType: "Pepperoni",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 20.99,
      quantity: 20,
    },
    {
      pizzaName: "Cheese",
      pizzaType: "Cheese",
      pizzaSize: "Medium",
      foodImage: "img.url",
      pizzaPrice: 20.99,
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
