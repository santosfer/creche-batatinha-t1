function Pontuar(patinha) {
    var url = window.location;
    url = url.toString()
    url = url.split("cadastro.html");
    url = url[0];
   
    var p1 = document.getElementById("p1").src;
    var p2 = document.getElementById("p2").src;
    var p3 = document.getElementById("p3").src;
    var p4 = document.getElementById("p4").src;
    var p5 = document.getElementById("p5").src;
    var pontuacao = 0;
   
   if (patinha == 5){ 
    if (p5 == url + "imagens/patavazia.png") {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patacheia.png";
    document.getElementById("p4").src = "imagens/patacheia.png";
    document.getElementById("p5").src = "imagens/patacheia.png";
    pontuacao = 5;
    } else {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patacheia.png";
    document.getElementById("p4").src = "imagens/patacheia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 4;
   }}
    
    //patinha 4
   if (patinha == 4){ 
    if (p4 == url + "imagens/patavazia.png") {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patacheia.png";
    document.getElementById("p4").src = "imagens/patacheia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 4;
    } else {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patacheia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 3;
   }}
   
   //patinha 3
   if (patinha == 3){ 
    if (p3 == url + "imagens/patavazia.png") {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patacheia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 3;
    } else {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patavazia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 2;
   }}
    
   //patinha 2
   if (patinha == 2){ 
    if (p2 == url + "imagens/patavazia.png") {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patacheia.png";
    document.getElementById("p3").src = "imagens/patavazia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 2;
    } else {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patavazia.png";
    document.getElementById("p3").src = "imagens/patavazia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 1;
   }}
    
    //patinha 1
   if (patinha == 1){ 
    if (p1 == url + "imagens/patavazia.png") {
    document.getElementById("p1").src = "imagens/patacheia.png";
    document.getElementById("p2").src = "imagens/patavazia.png";
    document.getElementById("p3").src = "imagens/patavazia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 1;
    } else {
    document.getElementById("p1").src = "imagens/patavazia.png";
    document.getElementById("p2").src = "imagens/patavazia.png";
    document.getElementById("p3").src = "imagens/patavazia.png";
    document.getElementById("p4").src = "imagens/patavazia.png";
    document.getElementById("p5").src = "imagens/patavazia.png";
    pontuacao = 0;
   }}
    
    document.getElementById('avaliacao').innerHTML = pontuacao;
    
   }