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
  //------ Solution avec map -----//
  //let count = 0;
  // results.map((item) => {
  // const split = item.split(":");
  // input : ["3:0"].split(":")
  // output : ["3", "0"]
  // comparer l'elemet à l'index 0 => "3"
  // comparer l'elemet à l'index 1 => "0"
  // si 3 > 0 => 3pts
  // solution avec if else
  // if (split[0] > split[1]) {
  //   count = count + 3;
  // } else if (split[0] === split[1]) {
  //   count++;
  // }
  // solution avec une ternire
  // split[0] > split[1]
  //   ? (count = count + 3)
  //   : split[0] === split[1]
  //     ? count++
  //     : count + 0;
  // solution avec destrcuturation
  //   const [home, away] = item.split(":");
  //   home > away ? (count = count + 3) : home === away ? count++ : count + 0;
  // });
  // ----Solution avec reduce--- //
  return results.reduce((score, currentValue) => {
    const [home, away] = currentValue.split(":");
    home > away ? (score = score + 3) : home === away ? score++ : score + 0;
    return score;
  }, 0);
}

export default getPoints;
