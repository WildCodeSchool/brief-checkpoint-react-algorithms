/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex:
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  // Ton code ici !
  // const array1 = ["1", "2", "3"], const array2= ["2", "4", "1"] le retour de la fonction sumArray => parcourir
  // les tableau et faire la somme de chaque element de mes tableaux
  // array1[1] + array2[1]. etc..
  // initialiser un array vide
  // const result: string[] = [];
  // je verifie la longuer de chaque array
  // si le length est identique
  // if (arrayA.length === arrayB.length) {
  //   for (let index = 0; index < arrayA.length; index++) {
  //     const sumArray = parseInt(arrayA[index]) + parseInt(arrayB[index]);
  //     result.push(sumArray.toString());
  //   }
  // }
  //si le length sont differents
  // arrayA = [1, 2, 3] => length = 2
  // arrayB = [1,2,3,4] => length = 3
  // const array = arrayA + arrayB
  //  3 -2 = 1=>1 > 0 => arraB > arrayA
  // si arrayA est plus long que arrayB
  // if (arrayA.length > arrayB.length) {
  //   const diff = arrayA.length - arrayB.length;
  //   for (let index = 0; index < diff; index++) {
  //     arrayB.push("0");
  //   }
  //   for (let index = 0; index < arrayA.length; index++) {
  //     const sumArray = parseInt(arrayA[index]) + parseInt(arrayB[index]);
  //     result.push(sumArray.toString());
  //   }
  // }
  // // si arrayB est plus long que arrayA
  // if (arrayA.length < arrayB.length) {
  //   const diff = arrayB.length - arrayA.length;
  //   for (let index = 0; index < diff; index++) {
  //     arrayA.push("0");
  //   }
  //   for (let index = 0; index < arrayA.length; index++) {
  //     const sumArray = parseInt(arrayA[index]) + parseInt(arrayB[index]);
  //     result.push(sumArray.toString());
  //   }
  // }

  const maxLength = Math.max(arrayA.length, arrayB.length);
  return Array.from({ length: maxLength }, (_, i) => {
    const valueArrayA = arrayA[i] ? parseInt(arrayA[i]) : 0;
    const valueArrayB = arrayB[i] ? parseInt(arrayB[i]) : 0;
    const sum = valueArrayA + valueArrayB;
    return sum.toString();
  });
  // return result;
}

export default sumArr;
