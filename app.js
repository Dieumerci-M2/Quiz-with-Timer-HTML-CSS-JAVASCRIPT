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
const mbrQuestionLeft = document.querySelector('.mbrquestion div #leftNumber')
const mbrQuestionRight = document.querySelector('.mbrquestion div #rightNumber')
const mbrQuestionTimer = document.querySelector('.mbrquestion div #timer')
const niveauExt = document.querySelector('.niveauExt')
let niveauFull = document.querySelector('.niveaufull')
let listQuestion = document.querySelector('.text div input')
const btnGameLeft = document.querySelector('.btngameleft')
const btnGameRight = document.querySelector('.btn.foot .btngameright')

// SELECTION DES ELEMENTS DE LA SECTION OUTPUT

const resultNom = document.querySelector('.EnteteOutput h1')
const resultEmail = document.querySelector('.ShowEmailOutput h3')
let showcheck = document.querySelector('.ShowCheckPositive')
let showresult = document.querySelector('.ShowResult span')
const returnBack = document.querySelector('.btn.returnBack')

const questionList = [
   {
      question: `Quel est le type d'un fichier javascript?`, 
      answer:[`.ts`,`.jsx`,`.js`,`jar`]
    
   },
   {
      question: `Quel est le type d'un fichier CSS?`,
      answer : [`.jsx`,`.js`,`.css`,`html`]
   },
   {
      question : `Quel est le type d'un fichier HTML?`,
      answer : [`.jsx`,`.js`,`.css`,`.html`]
   },
   {
      question: `Parmis ces langages, lequel est utiliser à la fois en Front et en Backend?`,
      answer : [`HTML`,`CSS`,`JAVASCRIPT`,`PHP`]
   },
   {
      question: `Quel sustème d'exploitation est plus utiliser dans le monde?`,
      answer : [`Ubuntu`,`MacOs`,`Debian`,`Windows10`]
   },
   {
      question: `Quel Framework JavaScript est plus utiliser en 2022?`,
      answer : [`Angular`,`Vue`,`React`, `Ember`]
   },
   {
      question: `Parmi ces Frameworks, lequel a été conçus par l'équipe Google?`,
      answer : [`Angular`,`Vue`,`React`,`Ember`]
   },
   {
      question: `Parmi ces Frameworks, lequel a été conçus par l'équipe Facebook?`,
      answer : [`Angular`,`React`,`Vue`,`Ember`]
   },
   {
      question: `Parmi ces Frameworks, lequel a été conçus par Evan You?`,
      answer : [`Angular`,`React`,`Vue`,`Ember`]
   },
   {
      question: `Quel est la ville célèbre en présence des grandes enseignes telle que : Google, Apple, facebook etc.`,
      answer : [`Washingston DC`,`Toronto`,`siliscon Valley`,`Massachusetts`]
   },
   {
      question: `Quel est le nom du PDG de Facebook?`,
      answer : [`Bill Gate`,`Mark Zuckerberg`,`Elon Musk`,`Andy Jassy`]
   },
   {
      question: `Quel est le langage de programmation le plus utiliser en Machine Learning?`,
      answer : [`JavaScript`,`Java`,`C++`,`Python`]

   },
   {
      question: "Pourquoi on met le script en bas dans la balyse body?",
      answer1: [`pour qu il soit lu en dernier`,`pour le design`,`pour le style`,`pour la forme`]
   },
   {
      question: `Parmi ces Frameworks, lequel est utiliser en Python web?`,
      answer : [`Ember`,`Angular`,`Django`,`React`]
   },
   {
      question: `Pour n'est pas avoir 0/15 dans ce Quiz, parmi ces langages de programmation, lequel est votre préféré?`,
      answer : [`Ruby on Rails`,`Python`,`JavaScript`,`C & C++`]
   },
]

//Les Fonctions Utilisers

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

// LES ECOUTEURS

// LES ECOUTEURS POUR LA SECTION LOG

nom.addEventListener('input' , ()=>{
    validName(this)
})
email.addEventListener('click', ()=>{
   validEmail(this)   
})
 buttonlog.addEventListener('click', ()=>{
    goToQuestion(this)
 })


 // LES ECOUTEURS POUR LA SECTION GAME

 question.addEventListener('click', ()=>{
   
 })

 mbrQuestion.addEventListener('click', ()=>{
     
 })

 mbrQuestionLeft.addEventListener('click',()=>{
    
 })

 mbrQuestionRight.addEventListener('click',()=>{
    
 })

 mbrQuestionTimer.addEventListener('click', ()=>{
    
 })

 niveauExt.addEventListener('click', ()=>{
    
 })

 niveauFull.addEventListener('click', ()=>{
     
 })

 listQuestion.addEventListener('click', ()=>{
    
 })
 questionOne.addEventListener('click',()=>{

 })

 questionTwo.addEventListener('click', ()=>{
    niveauFull.style.display = 'block';
 })

 questionTree.addEventListener('click', ()=>{

 })

 questionFour.addEventListener('click', ()=>{

 })

 btnGameLeft.addEventListener('click', ()=>{

 })

 btnGameRight.addEventListener('click', ()=>{
    e.style.background = 'black';
 })

 // LES ECOUTEURS POUR LA SECTION OUTPUT

 resultNom.addEventListener('click', ()=>{

 })

 resultEmail.addEventListener('click', ()=>{

 })

 showcheck.addEventListener('click', ()=>{

 })

 showresult.addEventListener('click', ()=>{

 })

 returnBack.addEventListener('click', ()=>{

 })





