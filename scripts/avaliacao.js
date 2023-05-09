var socializacao_pontuacao = 0;
var sonequinha_pontuacao = 0;
var alimentacao_pontuacao = 0;
var brincadeiras_pontuacao = 0;
var preguicinha_pontuacao = 0;
var fotos_pontuacao = 0;

let botaoSalvar = document.getElementById('salvar');

botaoSalvar.disabled = true;

const currentDate = new Date();
const month = (currentDate.toLocaleString('default', { month: 'long' }));
const year = currentDate.getFullYear();
const dateElement = document.getElementById('dataAtual');
dateElement.textContent = `${month}/${year}`;



function Pontuar(patinha, id1, id2, id3, id4, id5) {
    
    let p1 = document.getElementById(id1)
    let p2 = document.getElementById(id2)
    let p3 = document.getElementById(id3)
    let p4 = document.getElementById(id4)
    let p5 = document.getElementById(id5)

    let patinhas = [p1, p2, p3, p4, p5]
    
    switch (id1) {
        case 'soci1':
            socializacao_pontuacao = patinha;
            break;
        case 'sone1':
            sonequinha_pontuacao = patinha;
            break;
        case 'alim1':
            alimentacao_pontuacao = patinha;
            break;
        case 'brin1':
            brincadeiras_pontuacao = patinha;
            break;
        case 'preg1':
            preguicinha_pontuacao = patinha;
            break;
        case 'foto1':
            fotos_pontuacao = patinha;
            break;
        default:
            break;    
    }

    for(var i = 0; i < patinha; i++) {
        patinhas[i].src = ("imagens/patacheia.png")
    }

    for(var j = patinha; j < 5; j++){
        patinhas[j].src = ("imagens/patavazia.png")
    }

    if (socializacao_pontuacao > 0 && sonequinha_pontuacao > 0 && alimentacao_pontuacao > 0 && brincadeiras_pontuacao > 0 && preguicinha_pontuacao > 0 && fotos_pontuacao > 0) {
        botaoSalvar.disabled = false;
    }


}
