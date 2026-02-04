/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
* 
On fait une boucle for pour parcourir la string
On compare chaque caractère avec la lettre donnée
Si le caractère est égal à la lettre, on incrémente le compteur
On retourne le compteur
*/

function countLetters(givenString: string, letter: string): number {
  let count = 0; // Compteur de lettres
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === letter) {
      count++; // Incrémentation du compteur
    }
  }
  return count; // Retourne le compteur
}

export default countLetters;
