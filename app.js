// SELECTION DES ELEMENTS 

const mainlog = document.querySelector('.header.log')
const maingame = document.querySelector('.header.game')
const mainoutput = document.querySelector('.header.output')

// SELECTIONS DES ELEMENTS DE LA SECTION LOG

let warningMessageName = document.querySelector('.formlog .warningName')
let warningMessageEmail= document.querySelector('.formlog .warningEmail')
const buttonlog = document.querySelector('.btn.log #valider')
const nom = document.querySelector('.formlog #nom')
const email = document.querySelector('.formlog #email')

// SELECTION DES ELEMENTS DE LA SECTION GAME

const question = document.querySelector('.container h4')
const mbrQuestion = document.querySelector('.mbrquestion')
const mbrQuestionLeft = document.querySelector('.mbrquestion .leftNumber')
const mbrQuestionRight = document.querySelector('.mbrquestion div #rightNumber')
const mbrQuestionTimer = document.querySelector('.mbrquestion div #timer')
const niveauExt = document.querySelector('.niveauExt')
let niveauFull = document.querySelector('.niveaufull')
const blocAnswer = document.querySelector('.text')
let listQuestion = document.querySelectorAll('.text input')
const btnGameLeft = document.querySelector('.btngameleft')
const btnGameRight = document.querySelector('.btn.foot .btngameright')
const labelOfQuestion = document.querySelectorAll('.text span')
let stock = -1;
let score = 0;

// SELECTION DES ELEMENTS DE LA SECTION OUTPUT

const resultNom = document.querySelector('.EnteteOutput h1')
const resultEmail = document.querySelector('.ShowEmailOutput h3')
const showcheckSucces = document.querySelector('.ShowCheckPositive img:nth-child(1)')
const showcheckFalse = document.querySelector('.ShowCheckPositive img:nth-child(2)')
let showresult = document.querySelector('.ShowResult #resultNumber')
const returnBack = document.querySelector('.btn.returnBack #accueil')

// CONSTRUCTEUR POUR LES QUESTIONNAIRES

function Question(question="", answer=[""], correct =0) {
   this.question = question;
   this.answer = answer;
   this.correct = correct;
}
const questionList = [
   new Question(`Quel est le type d'un fichier javascript?`, [`.ts`,`.jsx`,`.js`,`.jar`],2),
   new Question(`Quel est le type d'un fichier CSS?`, [`.jsx`,`.js`,`.css`,`html`],2),
   new Question(`Quel est le type d'un fichier HTML?`,[`.jsx`,`.js`,`.css`,`.html`],3),
   new Question(`Parmis ces langages, lequel est utiliser à la fois en Front et en Backend?`, [`HTML`,`CSS`,`JAVASCRIPT`,`PHP`],2),
   new Question(`Quel sustème d'exploitation est plus utiliser dans le monde?`,[`Ubuntu`,`MacOs`,`Debian`,`Windows10`],3),
   new Question(`Quel Framework JavaScript est plus utiliser en 2022?`, [`Angular`,`Vue`,`React`, `Ember`],2),
   new Question(`Parmi ces Frameworks, lequel a été conçus par l'équipe Google?`, [`Angular`,`Vue`,`React`,`Ember`],0),
   new Question(`Parmi ces Frameworks, lequel a été conçus par l'équipe Facebook?`, [`Angular`,`React`,`Vue`,`Ember`],1),
   new Question(`Parmi ces Frameworks, lequel a été conçus par Evan You?`, [`Angular`,`React`,`Vue`,`Ember`],2),
   new Question(`Quel est la ville célèbre en présence des grandes enseignes telle que : Google, Apple, facebook etc.`, [`Washingston DC`,`Toronto`,`siliscon Valley`,`Massachusetts`],2),
   new Question(`Quel est le nom du PDG de Facebook?`, [`Bill Gate`,`Mark Zuckerberg`,`Elon Musk`,`Andy Jassy`],1),
   new Question (`Quel est le langage de programmation le plus utiliser en Machine Learning?`, [`JavaScript`,`Java`,`C++`,`Python`],3),
   new Question(`Pourquoi on met le script en bas dans la balyse body?`, [`pour qu il soit lu en dernier`,`pour le design`,`pour le style`,`pour la forme`],0),
   new Question(`Parmi ces Frameworks, lequel est utiliser en Python web?`, [`Ember`,`Angular`,`Django`,`React`],2),
   new Question(`Quelle est la syntaxe utiliser pour déclarer une fonction en JavaScript?`, [`define`,`function`,`def`,`fonction`],1)
]

// LES FONCTIONS UTILISERS

// LA FONCTION POUR VALIDER LE NOM

const validName = ()=>{
   let regex = /^([a-z A-Z]{4,50})$/;
   let small = nom.nextElementSibling;
   const fullName = nom.value.trim();
   if(!regex.test(fullName)){
      small.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz. ."
      small.style.color = "red";
      nom.style.border = " 1px solid rgba(255, 56, 56, 1)";
      nom.style.boxShadow = '5px 5px -5px -2px red';
   }else{
      nom.style.color = "black";
      small.textContent = "";
      nom.style.border = " 1px solid black";
      return true;
   }
}
// LA FONCConfirmNexQuestionTION POUR VALIDER L'EMAIL

const validEmail = ()=>{
   let regex = /^([a-zA-Z\._\-0-9]{4,50})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
   let small = email.nextElementSibling;
   const fullEmail = email.value.trim();
   if(!regex.test(fullEmail)){
      small.textContent = "N’oubliez pas de renseigner votre Email avant de commencer le Quiz."
      small.style.color = "red";
      email.style.border = " 1px solid rgba(255, 56, 56, 1)";
      email.style.boxShadow = '5px 5px -5px -2px red';
   }else{
      email.style.color = "black";
      small.textContent = "";
      email.style.border = " 1px solid black";
      return true;
   }
   
}

// LA FUNCTION POUR MIXER LES DEUX VALIDATIONS

const goToQuestion = ()=>{
   
   if(validName() && validEmail()){
      mainlog.style.display = 'none';
      maingame.style.display = 'block';
      nextQuestion();
   }else{
      mainlog.style.display = 'block';
      maingame.style.display = 'none';
   }
}

// LA FUNCTION POUR PARCOURIR LES QUESTIONS DU QUIZ

const nextQuestion = ()=>{
   stock++;
   if(stock == 15){
      mainoutput.style.display = 'block';
      maingame.style.display = 'none';
      resultNom.textContent = nom.value;
      resultEmail.textContent = email.value;
      showCheckingSuccess(this);
      monScore(this);
   }
   mbrQuestionLeft.textContent = stock+1;
   showresult.textContent = score;
   question.textContent = questionList[stock].question;
   labelOfQuestion.forEach((element, index)=>{
      element.textContent = questionList[stock].answer[index];
   })
}

const showCheckingSuccess = ()=>{
   if(score < 8){
      showcheckSucces.style.display = 'none';
}else if(score >=8 ){
      showcheckFalse.style.display = 'none';
}
}

const dropAll = ()=>{
   mainoutput.style.display = 'block';
   maingame.style.display = `none`;
   resultNom.textContent = nom.value;
   resultEmail.textContent = email.value;
}


// LA FONCTION POUR LE TIMER

let timerWidth = 100;
let startTime = 59;
function conteur() {
   if (startTime > 0) {
      mbrQuestionTimer.textContent = `${startTime}`
      timerWidth = timerWidth - (100 / 60)
      niveauFull.style.width = `${timerWidth}%`;
      startTime--;
   }else if(startTime==0){
      // question.textContent = questionList[stock].question;
      nextQuestion();
      startTime = 59;
      timerWidth = 100;
   }
}
// Les FONCTIONS POUR DESACTIVER LE BOUTON NEXTQUESTION QUAND RIEN N'AS ETAIT FAITES AU NIVEAU DES INPUT

const desactiveBtn = ()=>{
   btnGameRight.style.backgroundColor = 'rgba(127, 214, 228, 0.415)';
   btnGameRight.style.cursor = 'not-allowed'; 
 }

const ConfirmNexQuestion = ()=>{
   for (let i = 0; i < listQuestion.length; i++) {
      if (listQuestion[i].checked) {
         nextQuestion();
         startTime = 59;
         timerWidth = 100;
      } 
   }
}
// FONCTION POUR L'INCREMANTATION DU SCORE

const monScore = ()=>{

   listQuestion.forEach((element, index)=>{
  
   if(element.checked && questionList[stock-1].correct == index ){
         score++; 
         console.log(score);
      }
      element.checked = false;
   })
}
 
// LA FONCTION DE RETOUR A LA PAGE D'ACCUEIL

const returnHome = ()=>{
   mainoutput.style.display = 'none';
   mainlog.style.display = 'block';
}
// LES ECOUTEURS

// LES ECOUTEURS POUR LA SECTION LOG

nom.addEventListener('input' , ()=>{
    validName(this)
})
email.addEventListener('input', ()=>{
   validEmail(this)   
})
 buttonlog.addEventListener('click', ()=>{
    goToQuestion(this);
    setInterval(conteur, 1000);
    niveauFull.style.display = 'block';

 })


 // LES ECOUTEURS POUR LA SECTION GAME

 blocAnswer.addEventListener('click', ()=>{
   btnGameRight.style.backgroundColor = 'rgb(0, 221, 255)';
   btnGameRight.style.cursor = 'pointer'; 
 }) 

 btnGameLeft.addEventListener('click', ()=>{
   dropAll(this);
   showCheckingSuccess(this);
 })

 btnGameRight.addEventListener('click', ()=>{
   ConfirmNexQuestion();
   desactiveBtn();
   monScore(this);
    
 })

 // LES ECOUTEURS POUR LA SECTION OUTPUT

 returnBack.addEventListener('click', ()=>{
   returnHome(this);
   location.reload();
 })
