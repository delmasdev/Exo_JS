function pyramide(){
  let nbrOfSpaces = " ";
  let nbrOfStep = "";
  nbrOfStep = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  let x = Number(nbrOfStep);
  let i = 1;
  let step = "#";
  x--;
  while (i <= Number(nbrOfStep)) {
    console.log(nbrOfSpaces.repeat(x) + step.repeat(i));
    i++;
    x--;
  }
}

console.log(pyramide());
