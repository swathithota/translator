var btnInput=document.querySelector("#btn-translate");
var btnRef =btnInput.addEventListener("click",eventClick);
var txtInput=document.querySelector("#txt-input");
var txtOutput=document.querySelector("#txt-output");
var url= "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(textInput){

return url+"?"+"text="+textInput;
}
function errorhandler(error){
  console.log("error occured ", error)
}

function eventClick(){
var txtValue= txtInput.value;
txtOutput.innerText= "adads"+txtValue;
console.log(txtValue)
console.log("inside click " ,txtValue)

fetch(getTranslatedUrl(txtValue))
.then(response=>response.json())
.then(json=>txtOutput.innerText=json.contents.translated)
.catch(errorhandler)

}