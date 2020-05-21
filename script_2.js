function fact(){
  let count = 1;
  let nbr = "";
  let f = 1;
  nbr = prompt("De quel nombre veux-tu calculer la factorielle?")

    for(count; count <= Number(nbr); count++){
      f = f *count;
    }
    return f;
}

console.log(`Le résultat est : ${fact()}`);