// glpobal variables
var secret = "Java Script";
var lettersGuessed='';
var counter = 1;

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

 // inicialization

function OnClick(event){

event.target.setAttribute("disabled", "disabled");

// refresh clicked button
var el = document.getElementById('secret');
el.textContent = getGuessedWord("a");
// refresh lettersGuessed
console.log(event.textContent);

}

for(var i=65; i<91; i++) {
// write alphabet
var group = document.getElementById('buttons');
var elButton = document.createElement("button");
 elButton.setAttribute('type','button');
 elButton.setAttribute('class','btn btn-primary');
 elButton.textContent = String.fromCharCode(i);
 // append button
 group.appendChild(elButton);
 elButton.addEventListener("click",OnClick);
}

