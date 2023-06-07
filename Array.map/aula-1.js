const array = [
    {
        nome: "Lucca",
        idade: 21
    },

    {
        nome: "Cristino",
        idade: 53
    },

    {
        nome: "Luciana",
        idade: 53
    },

    {
        nome: "Miguel",
        idade: 24
    },

    {
        nome: "Raphael",
        idade: 13
    },

    {
        nome: "Isabella",
        idade: 14
    },

    {
        nome: "Júlia",
        idade: 21
    },
];

console.log(array.map((item) => {
    return {
        frase: `Seu nome é: ${item.nome} e, sua idade é: ${item.idade}`
    };
}));