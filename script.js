let typingText = document.querySelector(".change_txt");
let Designation = ["Front End Developer","Problem Solver"];

let arrayIndex = 1;

function ChangingTxt(){
    if(arrayIndex < Designation.length){
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex+1;
    }
    else{
        arrayIndex = 0; 
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex+1;
    }
}
ChangingTxt();
setInterval(ChangingTxt,5000);

