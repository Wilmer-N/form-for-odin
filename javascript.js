const firstP = document.querySelector("#password")
const secondP = document.querySelector("#confirm")

function confirmPassword (){
    if(secondP.value !== firstP.value){
        secondP.setCustomValidity("Did not math");
        secondP.style.border = "1px solid red"
        console.log("no")
    }else{
        secondP.setCustomValidity("");
        console.log("yes")
    }
}