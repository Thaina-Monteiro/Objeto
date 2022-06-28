// Crie um objeto que receba ao menos três propriedades sobre você.
let sobre = {
    nome: 'Thainá',
    idade: 23,
    corFavorita: 'Azul'

}
console.log(sobre)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.país = "Brasil"
console.log(sobre)

// Remova uma propriedade desse objeto.
delete sobre.corFavorita
console.log(sobre)

//Mostre no console todas as propriedades desse objeto.
console.log(sobre)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [{
    nome: 'Amanda',
    idade: 24,
    telefone: 21985340425,
    amigos: ['Bruna', 'Débora', 'Paulo', 'Carla']
},
{
    nome: 'Lucas',
    idade: 25,
    telefone: 21996356235,
    amigos: ['Rodrigo', 'Márcio', 'Pedro', 'Maria']
},
{
    nome: 'Roberta',
    idade: 15,
    telefone: 21984653265,
    amigos: ['Larissa', 'Anita', 'Wellida', 'Luisa']
},
{
    nome: 'Paula',
    idade: 34,
    telefone: 21965329874,
    amigos: ['Victor', 'Claudio', 'Carla', 'Monica']
},
{
    nome: 'Felipe',
    idade: 28,
    telefone: 21985652365,
    amigos: ['Natan', 'Gustavo', 'Antonio', 'Lucia']
}
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[0])

