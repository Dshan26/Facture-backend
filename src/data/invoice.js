export const invoice = {
  id: 10,
  name: "componentes pc",
  client: {
    name: "Edier",
    lastName: "Roa",
    address: {
      country: "usa",
      city: "New york",
      street: "one street",
      number: 12,
    },
  },
  company: {
    name: "new egg",
    fiscaNumber: "1234567",
  },
  items: [
    { id:1,product: "Cpu Intel i7", price: 500, quantity: 1 },
    { id:2,product: "Corsair Keyboard mecanico", price: 150, quantity: 1 },
    { id:3,product: "Monitor Asus", price: 350, quantity: 1 },
  ],
};
