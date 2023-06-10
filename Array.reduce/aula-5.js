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

const funcReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = array.reduce(funcReduce, []);

console.log(pessoas);