# parliament

FÖR FUNKTION SOM KICKAR IGÅNG NÄR BODYN LADDAT KLART
document.body.onload = function(){}

var newDiv = document.createElement("div"); för att skapa nytt DOM objekt

var newContent = document.createTextNode("för att lägga in en text-nod i DOMen")

newDiv.appendChild(newContent); för att lägga in text-noden i den nyligen skapade diven

Skapa färg för ledamöter utan parti, i partyColor { -: "grå" }


document.getElementsByClassName


Ge divvarna classnamn för varje parti. Sedan när skiten skapas kan man lägga till classnamn på de objekten.
Senare kan vi filtrera bort "alla S" till exempel, typ if class has "S" then hide, eller nåt.

