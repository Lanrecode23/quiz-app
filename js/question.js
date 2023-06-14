const quiz = document.getElementById("quiz");
const answer = document.querySelectorAll(".answer");
const label = document.querySelectorAll(".op_label");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const sumbitBtn = document.getElementById("submit");
const result = document.getElementById("result-container");
const scoreContainer = document.getElementById("scored");
const image = document.getElementsByClassName("image");
const tried = document.getElementById("tried");


let currentQtn = 0;
let score = 0;
let userSelected = {}

let Name =JSON.parse(localStorage.getItem('firstname'));
document.getElementById("hello").innerHTML = `Welcome ${Name}`;

let questions = [
   {
    question:"1. What does Html stands for?",
    a:"Home tool markup language",
    b:"Hyperlink markup language",
    c:"Hypertext markup language",
    correct:"c",
   },
   {
    question:"2. Which property is used to control the stacking order of elements in CSS?",
    a:"position",
    b:"order",
    c:"z-index",
    correct:"c",
   },
   {
    question:"3. How do you select an element with the class name 'example' in CSS?",
    a:".example",
    b:"#example",
    c:"element.example",
    correct:"a",
   },
   {
    question:"4. Which CSS property is used to add space between the border and content of an element?",
    a:"margin",
    b:"padding",
    c:"space-between",
    correct:"b",
   },
   {
    question:"5. Which CSS property is used to create a shadow effect around an element?",
    a:"box-shadow",
    b:"text-shadow",
    c:"shadow-effect",
    d:"element-shadow",
    correct:"a",
   },
   {
    question:"6. What does css stands for?",
    a:"Central stylesheets",
    b:"Cascading stylesheets",
    c:"cascading sheetstyle",
    correct:"b",
   },
   {
    question:"7. What does js stands for?",
    a:"javascript",
    b:"javasite",
    c:"javitusite",
    correct:"a",
   },
   {
    question:"8. The correct place to place an external stylesheet in html file?",
    a:"in <body> tag",
    b:"in <head> tag",
    c:"in the end of the document",
    correct:"b",
   },
   {
    question:"9. which tag is used to describe an internal stylesheet?",
    a:"<script> tag",
    b:"<style> tag",
    c:"<css> tag",
    correct:"b",
   },
   {
    question:"10. How do you apply a background image to an element in CSS?",
    a:"background-image: url(image.jpg)",
    b:"background: url(image.jpg)",
    c:"image-source: url(image.jpg)",
    correct:"a",
   },

]

loadQuiz()

function loadQuiz(){
    question.innerText = questions[currentQtn].question;
    a_text.innerText = questions[currentQtn].a;
    b_text.innerText = questions[currentQtn].b;
    c_text.innerText = questions[currentQtn].c;

    // deselect the already selected button
    deSelected()
    if (userSelected[currentQtn]) {
        let selected = userSelected[currentQtn]
        document.getElementById(selected).checked = true;
    }
    if (currentQtn == questions.length-1) {
        nextBtn.style.display = 'none';
        sumbitBtn.style.display = 'block';
        
    }

}
nextBtn.addEventListener("click", function(e){
    e.preventDefault();
    let answer = getSelected();
    // if(answer){
    if (answer == questions[currentQtn].correct) {
        score+=10;
    }
    // change the question on next button when clicked
    if (currentQtn < questions.length) {
        currentQtn++;
        loadQuiz()
        
    }
})

prevBtn.addEventListener("click", function(e){
    e.preventDefault();
    // console.log(currentQtn);

    if (currentQtn > 0) {
        currentQtn--;
        loadQuiz();
        }
})
sumbitBtn.addEventListener("click",function(e) {
    e.preventDefault();
    if (getSelected()) {
        quiz.style.display = "none";
        result.style.display = "block";
        if (score <= 50) {
            tried.innerText = "You tried but never give up."
            tried.style.color = "red";
            scoreContainer.innerText = "You got "+ " " + score +"%" + " "+" out of " + "100%"
        }
        else if (score >= 60) {
            tried.innerText = "Good job! keep it up"
            tried.style.color = "green"
            scoreContainer.innerText = "You got "+ " " + score +"%" + " "+ " out of " + "100%"
        }
        setTimeout(() => {
            window.location.href = "login.html"
        }, 2000);
    }
})
// get the selected option and check if it tally with the answer
function getSelected() {
    let answerEl;
    answer.forEach(answer => {
        if (answer.checked){
            answerEl  = answer.id;
            userSelected[currentQtn] = answer;
        }
    });
    return answerEl;
}
// deselected the first option clicked recently
function deSelected() {
    answer.forEach(answer => {
        answer.checked = false;
    });
}