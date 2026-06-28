const scoreInput= document.getElementById("scoreInput")
const calcBtn= document.getElementById("calcBtn")
const results= document.getElementById("results")

calcBtn.addEventListener("click",calculateGrade)
function calculateGrade() {
    let score = Number(scoreInput.value)

    if (isNaN(score)|| score<0 || score>100){
        results.innerHTML="Error! enter the correct score";
        results.style.color="red"
        return;
    }
    let grade="";
    if(score>=70){
        grade= "A"
        results.style.color="green"
        
    }else if(score>=60){
        grade="B"
        results.style.color="blue"

    }else if(score>=50){
        grade="C"
        results.style.color="orange"
        
    }else if(score>=40){
        grade="D"
        results.style.color="brown"
        
    }else{
        grade="F"
        results.style.color="red"
        
    }
    results.innerHTML=
    `<p><strong>score:</strong>${score}</p>
    <p><strong>grade:</strong>${grade}</p>`
    scoreInput.value="";
}
