function Avaliar(patinha) {
    var url = window.location;
    url = url.toString()
    url = url.split("cadastro.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (patinha == 5){ 
    if (s5 == url + "imagens/patavazia.png") {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patacheia.png";
    document.getElementById("s4").src = "imagens/patacheia.png";
    document.getElementById("s5").src = "imagens/patacheia.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patacheia.png";
    document.getElementById("s4").src = "imagens/patacheia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 4;
   }}
    
    //patinha 4
   if (patinha == 4){ 
    if (s4 == url + "imagens/patavazia.png") {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patacheia.png";
    document.getElementById("s4").src = "imagens/patacheia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patacheia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 3;
   }}
   
   //patinha 3
   if (patinha == 3){ 
    if (s3 == url + "imagens/patavazia.png") {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patacheia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patavazia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 2;
   }}
    
   //patinha 2
   if (patinha == 2){ 
    if (s2 == url + "imagens/patavazia.png") {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patacheia.png";
    document.getElementById("s3").src = "imagens/patavazia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patavazia.png";
    document.getElementById("s3").src = "imagens/patavazia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 1;
   }}
    
    //patinha 1
   if (patinha == 1){ 
    if (s1 == url + "imagens/patavazia.png") {
    document.getElementById("s1").src = "imagens/patacheia.png";
    document.getElementById("s2").src = "imagens/patavazia.png";
    document.getElementById("s3").src = "imagens/patavazia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "imagens/patavazia.png";
    document.getElementById("s2").src = "imagens/patavazia.png";
    document.getElementById("s3").src = "imagens/patavazia.png";
    document.getElementById("s4").src = "imagens/patavazia.png";
    document.getElementById("s5").src = "imagens/patavazia.png";
    avaliacao = 0;
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }