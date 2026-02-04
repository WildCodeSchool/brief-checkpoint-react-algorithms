/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.
["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/

function getPoints(results: string[]): number {
  // Ton code ici !
  let count = 0;
  for (let i = 0; i < results.length; i++) {
    const matches = results[i].split(":");
    const ourScore = matches[0];
    const enemyScore = matches[1];
    if (ourScore > enemyScore) {
      count = count + 3;
    } else if (ourScore === enemyScore) {
      count = count + 1;
    } else {
      count = count + 0;
    }
  }
  return count;
}

export default getPoints;
