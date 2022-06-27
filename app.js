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

const question = document.querySelector('.container h6')
const mbrQuestion = document.querySelector('.mbrquestion')
const mbrQuestionLeft = document.querySelector('.mbrquestion .leftNumber')
const mbrQuestionRight = document.querySelector('.mbrquestion div #rightNumber')
const mbrQuestionTimer = document.querySelector('.mbrquestion div #timer')
const niveauExt = document.querySelector('.niveauExt')
let niveauFull = document.querySelector('.niveaufull')
let listQuestion = document.querySelector('.text div input')
const btnGameLeft = document.querySelector('.btngameleft')
const btnGameRight = document.querySelector('.btn.foot .btngameright')
const labelOfQuestion = document.querySelectorAll('.text span')
let stock = -1;

// SELECTION DES ELEMENTS DE LA SECTION OUTPUT

const resultNom = document.querySelector('.EnteteOutput h1')
const resultEmail = document.querySelector('.ShowEmailOutput h3')
let showcheck = document.querySelector('.ShowCheckPositive')
let showresult = document.querySelector('.ShowResult #resultNumber')
const returnBack = document.querySelector('.btn.returnBack #accueil')

// CONSTRUCTEUR POUR LES QUESTIONNAIRES

function Question(question="", answer=[""]) {
   this.question = question;
   this.answer = answer;
}
const questionList = [
   new Question(`Quel est le type d'un fichier javascript?`, [`.ts`,`.jsx`,`.js`,`.jar`]),
   new Question(`Quel est le type d'un fichier CSS?`, [`.jsx`,`.js`,`.css`,`html`]),
   new Question(`Quel est le type d'un fichier HTML?`,[`.jsx`,`.js`,`.css`,`.html`]),
   new Question(`Parmis ces langages, lequel est utiliser à la fois en Front et en Backend?`, [`HTML`,`CSS`,`JAVASCRIPT`,`PHP`]),
   new Question(`Quel sustème d'exploitation est plus utiliser dans le monde?`,[`Ubuntu`,`MacOs`,`Debian`,`Windows10`]),
   new Question(`Quel Framework JavaScript est plus utiliser en 2022?`, [`Angular`,`Vue`,`React`, `Ember`]),
   new Question(`Parmi ces Frameworks, lequel a été conçus par l'équipe Google?`, [`Angular`,`Vue`,`React`,`Ember`]),
   new Question(`Parmi ces Frameworks, lequel a été conçus par l'équipe Facebook?`, [`Angular`,`React`,`Vue`,`Ember`]),
   new Question(`Parmi ces Frameworks, lequel a été conçus par Evan You?`, [`Angular`,`React`,`Vue`,`Ember`]),
   new Question(`Quel est la ville célèbre en présence des grandes enseignes telle que : Google, Apple, facebook etc.`, [`Washingston DC`,`Toronto`,`siliscon Valley`,`Massachusetts`]),
   new Question(`Quel est le nom du PDG de Facebook?`, [`Bill Gate`,`Mark Zuckerberg`,`Elon Musk`,`Andy Jassy`]),
   new Question (`Quel est le langage de programmation le plus utiliser en Machine Learning?`, [`JavaScript`,`Java`,`C++`,`Python`]),
   new Question(`Pourquoi on met le script en bas dans la balyse body?`, [`pour qu il soit lu en dernier`,`pour le design`,`pour le style`,`pour la forme`]),
   new Question(`Parmi ces Frameworks, lequel est utiliser en Python web?`, [`Ember`,`Angular`,`Django`,`React`]),
   new Question(`Pour n'est pas avoir 0/15 dans ce Quiz, parmi ces langages de programmation, lequel est votre préféré?`, [`Ruby on Rails`,`Python`,`JavaScript`,`C & C++`])
]

// LES FONCTIONS UTILISERS

// LA FONCTION POUR VALIDER LE NOM

const validName = (valName)=>{
   let regex = /^([a-z A-Z]{4,50})$/;
   let small = nom.nextElementSibling;
   if(!regex.test(nom.value)){
      small.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz. ."
      small.style.color = "red";
      nom.style.border = " 1px solid rgba(255, 56, 56, 1)"
   }else{
      nom.style.color = "black";
      small.textContent = "";
      nom.style.border = " 1px solid black";
      return true;
   }
}
// LA FONCTION POUR VALIDER L'EMAIL

const validEmail = (valEmail)=>{
   let regex = /^([a-zA-Z\._\-0-9]{4,50})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
   let small = email.nextElementSibling;
   if(!regex.test(email.value)){
      small.textContent = "N’oubliez pas de renseigner votre Email avant de commencer le Quiz."
      small.style.color = "red";
      email.style.border = " 1px solid rgba(255, 56, 56, 1)"
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
   }else if(stock <= 7){
      showresult.innerHTML = `<span class="mdi mdi-close-circle-outline" id="result_symbole"></span>` 
   }
   mbrQuestionLeft.textContent = stock+1;
   showresult.textContent = stock;
   question.textContent = questionList[stock].question;
   labelOfQuestion.forEach((element, index)=>{
      element.textContent = questionList[stock].answer[index];
   })

}

const dropAll = ()=>{
   mainoutput.style.display = 'block';
   maingame.style.display = 'none';
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
      question.textContent = questionList[stock].question;
   }
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

 listQuestion.addEventListener('click', ()=>{
    
 })

 btnGameLeft.addEventListener('click', ()=>{
   dropAll(this);
 })

 btnGameRight.addEventListener('click', ()=>{
    nextQuestion();
 })

 // LES ECOUTEURS POUR LA SECTION OUTPUT

 returnBack.addEventListener('click', ()=>{
   returnHome(this)
 })





