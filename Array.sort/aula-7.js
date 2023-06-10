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

console.log(array);

// array.sort((left, right) => {
//     if(left.idade < right.idade) {
//         return -1
//     } else if(left.idade > right.idade) {
//         return 1;
//     } 

//     return 0;
// })

array.sort((left, right) => {
    if(left.nome.toUpperCase() < right.nome.toUpperCase()) {
        return -1;
    } else if(left.nome.toUpperCase() > right.nome.toUpperCase()) {
        return 1;
    } 

    return 0;
});

console.log(array);