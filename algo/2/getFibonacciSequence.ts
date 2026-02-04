/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []

pas trop compris mais j'ai essayé faire de mont mieux !
j'ai pris le code de la fonction getFibonacciSequence de l'exercice 2
et j'ai essayé de le modifier pour qu'il retourne les n premiers nombres de la suite de Fibonacci
mais je ne suis pas sûr que c'est correct
*/

function getFibonacciSequence(n: number): number[] {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

export default getFibonacciSequence;
