/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex:
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]



c'etait super long a comprendre j'ai du y passez 15 voir 20 minutes a comprendre .
j'ai du le faire 5 fois pour comprendre que il fallait mettre un A>B pour que cela ne calcule pas NaN quand il y a pas assez dans B ou A .
Cela m'a appris que il faut bien verifier les conditions avant de commencer a coder parceque si :

ArrayA = ["2", "7", "3", "8", "2"] et ArrayB = ["2", "4", "9"]
ArrayA.length = 5 et ArrayB.length = 3 
Donc A>B est vrais et on passe dans le if .

ArrayA =  ["2", "5", "3"] et ArrayB = ["2", "4", "9", "5", "5"]
ArrayA.length = 3 et ArrayB.length = 5 
Donc A<B est faux et on passe dans le else .

Bref c'etait long mais un super defis pour moi.
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  const result: string[] = [];

  if (arrayA.length > arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
      let sumB = Number.parseInt(arrayA[i]);

      let sumA = Number.parseInt(arrayB[i]);

      if (!sumB) {
        sumB = 0;
      }
      if (!sumA) {
        sumA = 0;
      }
      result.push((sumB + sumA).toString());
    }
  } else {
    for (let i = 0; i < arrayB.length; i++) {
      let sumB = Number.parseInt(arrayA[i]);

      let sumA = Number.parseInt(arrayB[i]);

      if (!sumB) {
        sumB = 0;
      }
      if (!sumA) {
        sumA = 0;
      }
      result.push((sumB + sumA).toString());
    }
  }

  return result;
}

export default sumArr;
