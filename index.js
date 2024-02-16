const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Um framework de front-end",
        "Uma linguagem de programação de alto nível",
        "Um banco de dados relacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama o processo de combinar duas strings em JavaScript?",
      respostas: [
        "Stringing",
        "Concatenação",
        "Mistura",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita",
        "Atribuição",
        "Comparação solta",
      ],
      correta: 0
    },
    {
      pergunta: "Como se referencia um elemento HTML em JavaScript?",
      respostas: [
        "getElementByID()",
        "querySelector()",
        "getHTML()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
      respostas: [
        "Remover um elemento",
        "Adicionar um elemento ao início",
        "Adicionar um elemento ao final",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "convertToNumber()",
        "stringToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle de repetição em JavaScript?",
      respostas: [
        "for",
        "while",
        "loop",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adicionar um estilo a um elemento",
        "Adicionar um evento a um elemento",
        "Adicionar um atributo a um elemento",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3') . textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
  
  quizItem.querySelector('dl dt').remove()
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
    
   
  }