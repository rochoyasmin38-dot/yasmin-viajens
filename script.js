const containerCards = document.getElementById('carrossel-cards');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const bntTema = document.getElementById('btn-tema');
 
// O valor em pixels que o carrossel vai andar a cada clique
// 320 é ideal porque é a largura do card (300px) + o gap (20px)
const tamanhoRolagem = 320;
 
 
btnNext.addEventListener('click', function() {
    // Rola o container para a DIREITA
    containerCards.scrollBy({
        left: tamanhoRolagem,
        behavior: 'smooth'
    });
});
 
btnPrev.addEventListener('click', function() {
    // Rola o container para a ESQUERDA (por isso o valor é negativo)
    containerCards.scrollBy({
        left: -tamanhoRolagem,
        behavior: 'smooth'
    });
});
 
bntTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
   
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('tema', 'escuro');
        bntTema.innerHTML = '☀️Claro';
      } else {
        localStorage.setItem('tema', 'claro');
        bntTema.innerHTML = '🌙Escuro';
      }
    });