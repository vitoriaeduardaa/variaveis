const prompt = require('prompt-sync'); 
const entrada = prompt(); 

const nomeCompleto = "Vitoria Eduarda Araujo"; 
const anoNascimento = 2006;
let anoAtual = 2024; 
let idade = 18;

 console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025; 
let Idade = 18; 
const NomeCompleto = " Vitoria Eduarda Araujo "; 
const Faculdade = " nenhuma ";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " + "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${NomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`) 
  
const listaDeViagens = new Array (
  `Dubai`, 
  `Paris`, 
  `Miami`, 
  `Chile`,
  `Toquio`
);
console.log(listaDeViagens)

console.log( listaDeViagens [4])
listaDeViagens.push("Coronel Vivida"); 
console.log(listaDeViagens);

listaDeViagens.splice(1,2); 
console.log(listaDeViagens); 

var nomeComprador = entrada (" qual é seu nome? ");
var idadeComprador = entrada("qual é sua idade? ");

if(idadeComprador < 18){
 console.log(`ola sua idade nao corresponde com nossas diretrizes ${nomeComprador}`);
  }
if(idadeComprador >= 18){
  console.log("Parabéns vpcê adiquiriu sua passagem com sucesso!")}