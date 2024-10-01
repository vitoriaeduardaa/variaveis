const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Vitoria Eduarda Araujo";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade atual é "  + idade + " e sou nascido no ano " + anoNascimento );

anoAtual = anoAtual + 1;
idade = idade +1;

console.log (`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} e estamos no ano ${anoAtual} e minha idade é ${idade}`);

const loginCerto = "Vitoria";
const senhaCerta = 141;

console.log("------------");
console.log("--AGENCIA DE VIAGENS--");
console.log("------------");
console.log("Faça seu login");

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha");


while(login != loginCerto){
  console.log("loginIncorreto");
  login = entrada("digite seu login novamente: ");
}
while(senha != senhaCerta){
  console.log("senha Incorreta");
  senha = entrada("digite sua senha novamente: ");
}

const listaDeViagens = new Array(
'Japão',
'Londres',
'paris',
'Inglaterra',
) ;

console.log(listaDeViagens) ;

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(3,1);

var nomeComprador = entrada("Qual seu nome?");
var idadeComprador = entrada("Qual sua idade?");

if (idadeComprador<18){

console.log(`Olá senhor(a) ${nomeComprador} infelizmente você não poderá viajar conosco`);
  console.log(`Já que sua idade é ${idadeComprador}`)
};
if (idadeComprador>=18){
  console.log(`Párabens senhor(a) ${nomeComprador} ,você é apto à viajar,para onde deseja ir? Os destinos são ${listaDeViagens}`);
}

