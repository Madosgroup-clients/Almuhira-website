const stepButton = document.getElementsByClassName("steps")
const stepContainer = document.querySelector("#stepsleft")
const mainFormElement = document.getElementById('applicationForm').elements;

const MIN_STEP = 1, MAX_STEP = 3 
var CurrentStep = MIN_STEP;

stepContainer.lastElementChild.innerText = `${CurrentStep} / ${MAX_STEP}`
// var stepsFowardBackward = stepButton[0].lastElementChild.attributes.getNamedItem("type").nodeValue


console.log(mainFormElement[0].nodeName);

for (let i = 0; i < mainFormElement.length; i++) {
   if(mainFormElement[i].nodeName === "FIELDSET"){
    let fieldSet = mainFormElement[i].elements
    console.log(fieldSet);
    for (let j = 0; j < fieldSet.length; j++) {
        console.log(fieldSet[j].name)
    }
   }
    
}
if (CurrentStep === MIN_STEP) stepButton[0].firstElementChild.classList.add("hidden")



stepButton[0].lastElementChild.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    CurrentStep !== MAX_STEP ? NextStep() 
    : console.log("you're on the submit button");
})
stepButton[0].firstElementChild.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    CurrentStep !== MIN_STEP ? PreviousStep() : ''
})





function NextStep() {
    CurrentStep += 1
    stepContainer.lastElementChild.innerText = `${CurrentStep} / ${MAX_STEP}`
    stepButton[0].firstElementChild.classList.remove("hidden")
    if (CurrentStep === MAX_STEP) {
        stepButton[0].lastElementChild.innerText = "Submit"
        stepButton[0].lastElementChild.setAttribute('type', 'submit')
        return CurrentStep
    }
}
function PreviousStep() {
    CurrentStep -= 1
    stepContainer.lastElementChild.innerText = `${CurrentStep} / ${MAX_STEP}`
    stepButton[0].lastElementChild.innerText = "Next"
    stepButton[0].lastElementChild.setAttribute('type', 'button')

    if (CurrentStep === MIN_STEP) {
        stepButton[0].firstElementChild.classList.add("hidden")
        return CurrentStep
    }
}