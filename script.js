let resultDisplay=document.querySelector(".result");
let inputString=document.getElementById("text-input");
let checkButton = document.getElementById("check-button");
checkButton.addEventListener("click",() =>{
    let inputValue = inputString.value;
    let inputArray=inputValue.split("");
    let reverseString= inputArray.reverse().join("");
    resultDisplay.classList.remove("active");
    if (reverseString===inputValue){
        resultDisplay.style.color="green";
        resultDisplay.innerText=`Hola! ${inputValue} is a Palindrome.`;

    }
    else{
        resultDisplay.style.color="red";
        resultDisplay.innerText= `Oops! ${inputValue} is not a Palindrome.`;
        
    }

})
