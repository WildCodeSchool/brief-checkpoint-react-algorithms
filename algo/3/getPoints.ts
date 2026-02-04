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


C'est c'etait long a comprendre mais quand on a compris la logic des points gagnée en fonctione des score de maths cela devient relativement simple!
Je init les points a 0
je fait une boucle qui prend chaque match 
je split le match en 2 pour avoir les scores de chaque equipe
je compare les scores et je met a jour le nombre de points
je retourne le nombre de points
*/

function getPoints(results: string[]): number {
  let points = 0;
  for (let i = 0; i < results.length; i++) {
    const match = results[i];
    const ourScore = Number.parseInt(match.split(":")[0]);
    const opponentScore = Number.parseInt(match.split(":")[1]);

    if (ourScore > opponentScore) {
      points += 3;
    } else if (ourScore === opponentScore) {
      points += 1;
    }
  }
  return points;
}

export default getPoints;
