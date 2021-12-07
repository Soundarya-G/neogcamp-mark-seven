var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(text){

    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("some error occured", error);
    alert("Something wrong with server: try again after some time");

}

function clickHandler(){

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.sontents.tarnslated
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler)