// Selecionando elementos do html
const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio");  

// Variável de controle resposta
let answer = 0;

// Função para gerar uma nova equação
function generate_equation(){ 
  // Gera números aleatórios para a equação e para as respostas fictícias
  let num1 = Math.floor(Math.random() * 13),
      num2 = Math.floor(Math.random() * 13),
      dummyAnswer1 = Math.floor(Math.random() * 10),
      dummyAnswer2 = Math.floor(Math.random() * 10),
      allAnswers = [],
      switchAnswers = [];

  // Determina a resposta com base nos números gerados
  if(num1 > num2){
    answer = eval(num1 - num2);
    document.getElementById("num1").innerHTML = num1; 
    document.getElementById("num2").innerHTML = num2;
  }
  else{
    answer = eval(num2 - num1);
    document.getElementById("num1").innerHTML = num2; 
    document.getElementById("num2").innerHTML = num1;
  }

  // Cria um array com todas as respostas possíveis
  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  // Embaralha as respostas
  for (let i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  // Atualiza os elementos HTML das opções com as respostas embaralhadas
  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
};

// Adiciona eventos as opções
option1.addEventListener("click", function(){
    // Verifica se a opção clicada é a resposta correta
    if(option1.innerHTML == answer){
      // Gera uma nova equação se a resposta estiver correta
      generate_equation();
    }
    else{
      // Toca o áudio de erro se a resposta estiver incorreta
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

// Gera uma equação inicial ao carregar a página
generate_equation()
