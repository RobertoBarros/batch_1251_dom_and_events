
// -------------------------
// SELECIONANDO ELEMENTOS
// -------------------------


// Seleciona a lista com o id 'fifa-wins'.
const list = document.querySelector('#fifa-wins');

// Seleciona todos os elementos 'li' dentro da lista.
const countries = list.querySelectorAll('li');

// Para cada país na lista, imprime o texto interno do elemento 'li' no console.
countries.forEach((country) => {
  console.log(country.innerText);
});

// Cria um novo array com os países 'france' e 'portugal'.
const newCountries = ['france', 'portugal']

// Para cada novo país, adiciona um novo elemento 'li' ao final da lista.
newCountries.forEach((country) => {
  list.insertAdjacentHTML('beforeend', `<li>${country}</li>`);
});

// Seleciona o terceiro item da lista (índice 2).
const italy = list.querySelectorAll("li")[2];

// A cada 1000 milissegundos (1 segundo), alterna a classe 'red' do item 'italy'.
setInterval(() => {
  italy.classList.toggle('red');
}, 1000);


// -------------------------
// ESCUTANDO EVENTOS
// -------------------------

// PARA UM ELEMENTO:

// Seleciona o elemento com o id 'romain'.
const romain = document.getElementById('romain');

// Adiciona um ouvinte de evento de clique ao elemento 'romain'.
romain.addEventListener('click', (event) => {
  // Quando 'romain' é clicado, alterna a classe 'img-circle' do elemento.
  event.currentTarget.classList.toggle('img-circle');
});


// PARA VÁRIOS ELEMENTOS:

// Seleciona todas as imagens na página.
const images = document.querySelectorAll('img');

// Para cada imagem, adiciona um ouvinte de evento de clique.
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    // Quando a imagem é clicada, exibe uma mensagem no console com a imagem clicada
    console.log(`click na imagem: ${image}`);
    // Alterna a classe 'img-circle' da imagem clicada.
    image.classList.toggle('img-circle');
  });
});
