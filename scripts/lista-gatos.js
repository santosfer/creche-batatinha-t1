const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', event => {
    let nomeGato = event.target.id;
    let imgGato = document.getElementsByClassName(nomeGato)[0].getAttribute('src'); 
    localStorage.setItem('nomeDoGato', nomeGato);
    localStorage.setItem('imgDoGato', imgGato);
  });
});