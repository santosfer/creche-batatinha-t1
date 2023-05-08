

function Pontuar(patinha, id1, id2, id3, id4, id5, rating) {
    
    let p1 = document.getElementById(id1)
    let p2 = document.getElementById(id2)
    let p3 = document.getElementById(id3)
    let p4 = document.getElementById(id4)
    let p5 = document.getElementById(id5)

    let patinhas = [p1, p2, p3, p4, p5]
    

    for(var i = 0; i < patinha; i++) {
        patinhas[i].src = ("imagens/patacheia.png")
    }

    for(var j = patinha; j < 5; j++){
        patinhas[j].src = ("imagens/patavazia.png")
    }

    document.getElementById(rating).innerHTML = patinha;

}

    // var url = window.location;
    // url = url.toString()
    // url = url.split("avaliacao.html");
    // url = url[0];

    // var p1 = document.getElementById(id1).src;
    // var p2 = document.getElementById(id2).src;
    // var p3 = document.getElementById(id3).src;
    // var p4 = document.getElementById(id4).src;
    // var p5 = document.getElementById(id5).src;
    // var pontuacao = 0;
   


//     //patinha 5
//    if (patinha == 5){ 
//     if (p5 == url + "imagens/patavazia.png") {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patacheia.png";
//     document.getElementById(id4).src = "imagens/patacheia.png";
//     document.getElementById(id5).src = "imagens/patacheia.png";
//     pontuacao = 5;
//     } else {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patacheia.png";
//     document.getElementById(id4).src = "imagens/patacheia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 4;
//    }}
    
//     //patinha 4
//    if (patinha == 4){ 
//     if (p4 == url + "imagens/patavazia.png") {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patacheia.png";
//     document.getElementById(id4).src = "imagens/patacheia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 4;
//     } else {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patacheia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 3;
//    }}
   
//    //patinha 3
//    if (patinha == 3){ 
//     if (p3 == url + "imagens/patavazia.png") {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patacheia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 3;
//     } else {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patavazia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 2;
//    }}
    
//    //patinha 2
//    if (patinha == 2){ 
//     if (p2 == url + "imagens/patavazia.png") {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patacheia.png";
//     document.getElementById(id3).src = "imagens/patavazia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 2;
//     } else {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patavazia.png";
//     document.getElementById(id3).src = "imagens/patavazia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 1;
//    }}
    
//     //patinha 1
//    if (patinha == 1){ 
//     if (p1 == url + "imagens/patavazia.png") {
//     document.getElementById(id1).src = "imagens/patacheia.png";
//     document.getElementById(id2).src = "imagens/patavazia.png";
//     document.getElementById(id3).src = "imagens/patavazia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 1;
//     } else {
//     document.getElementById(id1).src = "imagens/patavazia.png";
//     document.getElementById(id2).src = "imagens/patavazia.png";
//     document.getElementById(id3).src = "imagens/patavazia.png";
//     document.getElementById(id4).src = "imagens/patavazia.png";
//     document.getElementById(id5).src = "imagens/patavazia.png";
//     pontuacao = 0;
//    }}
    
//     document.getElementById(rating).innerHTML = pontuacao;
    
//    }