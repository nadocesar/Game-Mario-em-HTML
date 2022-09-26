const mario = document.querySelector('.mario'); // classe mario com o boneco andando
const pipe = document.querySelector('.pipe');
function inserirImagem(url) {
  let img = document.createElement("img");
  img.src=url;
  document.body.appendChild(img);
}


const jump = () => {
  mario.classList.add('jump'); // função adiciona o jump na classe mario / para pulo

  setTimeout(() => {          // função q recebe parametros mas só executa depois do tempo "SetTimeout"(função, tempo)(função)=>.mario remove .jump depois que passa o tempo
   
     mario.classList.remove('jump');  // função remove o jump da classe mario - para poder add novamente quando apertar o botao

  }, 550);  // => tempo da função
}

const loop = setInterval(() =>{

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //Conseguindo o valor da propriedade do objeto mario
  

  if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 80 ) {

    // console.log('loop');

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);  // Para o loop

  }
  console.log(pipePosition);
  

}, 10);   // loop para verificar se usurio apertou a tecla

document.addEventListener('keydown', jump);