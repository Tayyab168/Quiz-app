let questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid"
        },
        correct: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Venus",
            d: "Jupiter"
        },
        correct: "Venus"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso",
            d: "Michelangelo"
        },
        correct: "Pablo Picasso"
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: {
            a: "Elephant",
            b: "Blue Whale",
            c: "Giraffe",
            d: "Lion"
        },
        correct: "Blue Whale"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answers: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen"
        },
        correct: "Hydrogen"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: {
            a: "Au",
            b: "Ag",
            c: "G",
            d: "Go"
        },
        correct: "Au"
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Galileo Galilei",
            d: "Nikola Tesla"
        },
        correct: "Albert Einstein"
    },
    {
        question: "Which novel by Jane Austen features the character Mr. Darcy?",
        answers: {
            a: "Emma",
            b: "Sense and Sensibility",
            c: "Mansfield Park",
            d: "Pride and Prejudice"
        },
        correct: "Emma"
    },
    {
        question: "What is the world's largest ocean?",
        answers: {
            a: "Indian Ocean",
            b: "Atlantic Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        correct: "Atlantic Ocean"
    },
    {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        answers: {
            a: "Galileo Galilei",
            b: "Isaac Newton",
            c: "Charles Darwin",
            d: "Marie Curie"
        },
        correct: "Isaac Newton"
    }
];




let index=0;
let score=0
let total=questions.length
start()

function start(){
     
    let start = document.querySelector(".btn")
    start.addEventListener("click",function(){
    
        addquestion()
    })

}


function addquestion(){
    let box= document.querySelector(".box")
    box.innerHTML = questions[index].question; 
   let ans = questions[index].answers
   for(key in ans ){
    let button = document.createElement("button")
    button.classList.add("btn")
    button.innerText=ans[key]
    box.append(button)
   }
   check();
}




function check(){
    let ansbtn  = document.querySelectorAll(".btn")
    for(i=0;i<ansbtn.length;i++){
       ansbtn[i].addEventListener("click",function(){
        if(this.innerText == questions[index].correct){
            score++
        }
        index++
        if(index<total){
            addquestion() ;
        }        
        else{
            endgame()
        }
    })
    
}
}



function endgame() {
    let box = document.querySelector(".box")
    box.innerHTML = `You scored ${score} in ${total} Questions`;
    let restartButton = document.createElement("button");
    restartButton.classList.add("btn");
    restartButton.innerText = "Restart";
    box.append(restartButton);
    
  restartButton.addEventListener("click",function(){
    index=0;
    score=0;
    addquestion()

  })
}




    

