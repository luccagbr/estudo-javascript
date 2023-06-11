const array = [
    {
        nome: "Lucca",
        idade: 21,
        cartoes: ['3521', '5521']
    },

    {
        nome: "Deize",
        idade: 53,
        cartoes: ['3579', '5251']
    },

    {
        nome: "Marcella",
        idade: 45,
        cartoes: ['3341', '7899']
    },

    {
        nome: "Alexandre",
        idade: 39,
        cartoes: ['3214', '9975']
    },

    {
        nome: "Regis",
        idade: 30,
        cartoes: ['7808', '4467']
    },

    {
        nome: "Clécio",
        idade: 14,
        cartoes: ['6689', '2456']
    },

    {
        nome: "Bério",
        idade: 28,
        cartoes: ['9765', '3876']
    },
];

console.log(array.flatMap((item) => item.cartoes));