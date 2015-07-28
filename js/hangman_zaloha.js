// glpobal variables
var secret = "Java Script";
var lettersGuessed='';
var counter = 1;
var elButton;

// getGuessedWord()
function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}

// update image

 // clear all buttons - refresh
function clearAllButtons(event){
  var chNodes = document.getElementById("buttons").childNodes;
  for(var n in chNodes)
    {
      console.log(chNodes[n]);
      //chNodes[n].setAttribute("disabled", "disabled");
    }
}

// alphabet buttons
function OnClickAlphaBet(event){
  
// disable clicked button
//event.target.setAttribute("disabled", "disabled");
//console.log(event.target);
// refresh clicked button
var el = document.getElementById("secret");

// refresh lettersGuessed
el.textContent = getGuessedWord("ahoj","a");
}

for(var i=65; i<91; i++) {
// write alphabet
var group = document.getElementById('buttons');
elButton = document.createElement("button");

elButton.setAttribute('type','button');
elButton.setAttribute('class','btn btn-primary');
elButton.textContent = String.fromCharCode(i);
 elButton.addEventListener("click",OnClickAlphaBet());
 // append button
 group.appendChild(elButton);
}

/**
// restart button
var btn = document.getElementById('restart');
btn.addEventListener('click', clearAllButtons);
*/

// alphabet butons
 var el = document.getElementById("secret");