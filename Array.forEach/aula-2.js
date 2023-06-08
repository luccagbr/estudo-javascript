const array = [
    {
        nome: "Lucca",
        idade: 21
    },

    {
        nome: "Deize",
        idade: 53
    },

    {
        nome: "Marcella",
        idade: 45
    },

    {
        nome: "Alexandre",
        idade: 39
    },

    {
        nome: "Regis",
        idade: 30
    },

    {
        nome: "Clécio",
        idade: 14
    },

    {
        nome: "Bério",
        idade: 28
    },
];

// for(let i = 0; i < array.length; i++) {
//     console.log({
//         ...array[i],
//         concatNameYear: `Seu nome é: ${array[i].nome} e, sua idade é: ${array[i].idade}`
//     });
// }

array.forEach((item) => {
    const { nome, idade } = item;

    console.log('Seu nome é: ', nome, '\nSua idade é: ', idade);
});