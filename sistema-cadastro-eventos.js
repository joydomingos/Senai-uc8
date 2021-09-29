// sistema cadastro de eventos
var readlineSync = require('readline-sync');
// var dataAtual = new Date()
var dataAtual = new Date()
var idade
var participantes = ["palestrante1", "palestrante2", "participante1", "participante2"]
var diaEvento
var mesEvento
var anoEvento
var qtdTotal = participantes.length
var qtd 
var nome
var readlineSync = require('readline-sync')

var diaAtual = dataAtual.getDate();
var mesAtual = dataAtual.getMonth() + 1;
var anoAtual = dataAtual.getFullYear();

console.log("Seja bem vindos ao Sistema de Cadastro de Eventos!\n\n")

diaEvento = parseInt(readlineSync.question("Digite o dia do mes em que ocorrera o evento (de 1 a 31)\n"))
mesEvento = parseInt(readlineSync.question("Digite o mes em que ocorrera o evento (de 1 a 12)\n"))
anoEvento = parseInt(readlineSync.question("Digite o ano em que ocorrera o evento (quatro)\n"))

if(anoAtual<=anoEvento){
    if(mesAtual<=mesEvento && anoAtual<=anoEvento){
        if(diaAtual<=diaEvento && mesAtual<=mesEvento && anoAtual<=anoEvento){
            console.log("Data disponivel!");
            idade = parseInt(readlineSync.question("Digite sua idade:\n"));
            if(idade>=18){
                console.log("Idade permitida");

                qtd = parseInt(readlineSync.question("Digte a quantidade de participante\n"));
                qtdTotal = qtdTotal + qtd;
                if(qtdTotal<=100){
                    nome = readilineSync.question("Digite seu nome para se cadastrar:\n")
                    participantes.push(nome)
                }
            }
        }
    }
}console.log("Não foi possivel realizar o cadastro.")
    console.log("participante confirmado com sucesso:\n")
         console.log(participantes)
