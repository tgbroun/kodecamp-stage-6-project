
let quizData = [
    {
        question: "1. The programming process is a?",
        option: ["System-development process", "Coding_process", "Testing_process", "Problem_solving_process"],
        correctAnswer: "Problem_solving_process"
    
    },
    {
        question: "2. What do mean by incrementing?",
        option: ["Squaring", "Adding_one", "Subtracting_one", "Setting_initial_value"],
        correctAnswer: "Adding_one"
    },
    {
        question: "3. Which of the following methods is used to access HTML elements using Javascript?",
        option: ["getElementById()", "getElementByClassName()", "Both_A_and_B", "None_of_the_above" ],
        correctAnswer: "Both_A_and_B"
    },
    {
        question: "4. Javascript is an _______ language?",
        option: ["Object-Oriented", "Object-Base", "Procedural", "None_of_the_above"],
        correctAnswer: "Object-Oriented"
    },
    {
        question: "5. How to stop an interval timer in Javascript?",
        option: ["clearInterval", "clearTimer", "intervalOver", "None_of_the_above"],
        correctAnswer: "clearInterval"
    },
    {
        question: "6. What happens when we run this code?",
        option: ["syntax_Error", "I_am_a_dog_gets_printed", "ReferenceError", "Nothing_happens"],
        correctAnswer: "Nothing_happens"
    },
    {
        question: "7. Which of the following are not server-side Javascript objects?",
        option: ["Date", "fileUpload", "Function", "All_of_the_above"],
        correctAnswer: "All_of_the_above"
    },
    {
        question: "8. What does … operator do in JS?",
        option: ["It_is_used_to_spread_iterables_to_individual_elements", "It_is_used_to_describe_a_datatype_of_undefined_size", "No_such_operator_exists", "None_of_the_above"],
        correctAnswer: "It_is_used_to_spread_iterables_to_individual_elements"
    },     
];

let currentQuestion = 0;
let correctOption = 10;
let wrongOption = 0;
let score = 0;

let htmlContent = document.querySelector(".container");
let nextButton = document.querySelector("#next-btn");
function dataView() {
    let data = quizData[currentQuestion];
    
    let htmlDisply = `<div class="card bg-danger">
    <div class="card-body"> 
        <h1 class="card-tittle text-center mb-4">Quiz Game</h1>
        
        <hr class="mb-5">
        <div class="all-data">
            <div class="row">
                <div class="col-6 text-white">
                    <p class="question bg-dark p-1 text-warning">Question: ${data.question}</p>
                    
                    <select name="" id="select-item" class="w-100 py-2">
                        <option value="" select-disabled>Select an answer</option>
                         ${data.option.map((option) => {
                         return `<option value=${option}>${option}</option>`;
                         })}
                    </select>
                </div>
                <div class="col-6 text-white">
                    <p class="options">Selected Option:</p>
                    <p class="c-answer">Correct Answer:</p>                    
                    
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button onclick="checkAnswer()" id="check-btn" class="btn btn-warning mt-3">Submit</button>
            <button onclick="next()" id="next-btn" class="btn btn-dark mt-3">Next</button>
        </div>                    
    </div>
    </div>`;
    htmlContent.innerHTML = htmlDisply;
    
    let selectedOption = document.querySelectorAll("select");
    selectedOption.forEach((select, index) => {
        select.addEventListener("change", (fill) =>{

            let selectValue = fill.target.value;
            let optionPicked = document.querySelectorAll(".options")[index];
            
        
            let checkAnswerButton = document.getElementById("check-btn");
            checkAnswerButton.addEventListener("click", () =>{
                let correctAnswer = document.querySelector(".c-answer");        
                correctAnswer.innerHTML = `Correct Answer: ${data.correctAnswer}`;
                optionPicked.innerHTML = `Selected Option: ${selectValue}`;
                checkAnswerButton.disabled = true;

                if (selectValue === data.correctAnswer) {
                    score += correctOption;
                    document.querySelector(".score").innerHTML = `${score}`;

                }
                else{
                    score += wrongOption;
                    document.querySelector(".score").innerHTML = `${score}`;
                }
            });
        });
    });
    
    
        
    

}
function next() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        dataView();
    };
    
};

dataView();
