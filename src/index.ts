let nome: string = "Anthony";//EXEMPLO DE TIPAGEM EXPLÍCITA. STRING

console.log(nome);
// TIPOS PRIMITIVOS //
console.log(typeof nome);//RETORNA O TIPO DA VARIÁVEL NOME

let sobrenome: any;//TIPAGEM EXPLÍCITA. ANY
let maiorIdade = true;

sobrenome = "Sevy";//STRING
sobrenome = 3;//NUMBER

console.log(typeof sobrenome);

// TIPAGEM DE ARRAYS/LISTAS // 
let nomes: string[] = ["Anthony", "Albert", "Antonio"];//LISTA DE STRINGS

let numeros: number[] = [123, 456, 789];//LISTA DE NUMBER

let b: boolean[] = [true, true, false];//LISTA DE BOOLEAN

let c: any[] = [123, "Anthony", false];//LISTA COM TIPOS DIFERENTES DE DADOS

// let d: any[] = 1234; RETORNA ERRO. D É STRING E DEVE RECEBER DADOS NESSA NOTAÇÃO
let d: any[] = [1234];//FORMA CORRETA DE INSERIR APENAS UM ÍNDICE EM UMA LISTA TYPESCRIPT

// TIPAGEM DE OBJETOS //
let usuario: { nome: string, idade: number, ativo: boolean } = {//ASSIM DEFINIMOS OS TIPOS DA PROPRIEDADES DO OBJETO
    nome: "Anthony",
    idade: 5,
    ativo: true
}
//TAMBÉM PODEMOS DEFINIR OBJETOS OU PROPRIEDADES DO TIPO ANY. ASSIM ELAS VÃO ACEITAR QUALQUER COISA.


console.log(usuario);