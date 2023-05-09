const formulario = document.querySelector('#cad-miau')

formulario.onsubmit = evento => {
   var nomeGato = document.querySelector('#nome').value

   if (nomeGato === '') {
      evento.preventDefault();
      document.getElementById('msgAlerta').innerHTML = "<p style= 'color:#f00;'>ERRO: é necessário preencher o nome do miau.</p>";
      return;
   }

   var nomeDono = document.querySelector('#nome-dono').value

   if (nomeDono === '') {
      evento.preventDefault();
      document.getElementById('msgAlerta').innerHTML = "<p style= 'color:#f00;'>ERRO: é necessário preencher o nome do dono.</p>";
      return;
   }

}
