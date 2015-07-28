// glpobal variables
var secret = "Java Script"; // finding word's
var lettersGuessed=''; 
var counter = 1;            // count of attempt
var insertChar = ' ';             // inserted char from alphabet

for (var i = 0; i < secret.length; i++)
{
  if (secret[i].localeCompare(' ') == 0)
  {
    insertChar += secret[i];
  }
  else {
    insertChar += '_';
  }
}
var elSecret = document.getElementById('secret');
elSecret.textContent = insertChar;

/* getGuessedWord() - search insert char in secret word */
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


function clearAllButtons(event){
  var chNodes = document.getElementById("buttons").childNodes;
  for(var n in chNodes)
    {
      console.log(chNodes[n]);
      if (n === 1) { chNodes[n].removeAttribute("disabled", "disabled");}
    }
}

function OnClickAlphabet(event){

event.target.setAttribute("disabled", "disabled");

// refresh clicked button
var el = document.getElementById('secret');

insertChar += event.target.textContent;

el.textContent = getGuessedWord(secret.toUpperCase(), insertChar);

// refresh lettersGuessed

console.log(secret.localeCompare(el.textContent));
if ( secret.toUpperCase().localeCompare(el.textContent) ==  0)
  {
    confirm('You won ! Play again ?')
  }

//console.log(event.target.textContent);
// console.log(el.textContent.indexOf(' '));
}

// generate alphabet buttons
for(var i=65; i<91; i++) {

// write alphabet
var group = document.getElementById('buttons');
var elButton = document.createElement("button");

// set attribute - button
 elButton.setAttribute('type','button');
 elButton.setAttribute('class','btn btn-primary');

 // convert number in ascii to char
 elButton.textContent = String.fromCharCode(i);

 // append button
 group.appendChild(elButton);
 elButton.addEventListener("click",OnClickAlphabet);
}

// restart button - remove disabled attribute from button group
var btn = document.getElementById('restart');
btn.addEventListener('click', clearAllButtons);



