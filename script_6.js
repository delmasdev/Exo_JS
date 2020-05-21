let a = "CCGUCGUUGCGCUACAGC";
a1 = a.substring(0, 3);
a2 = a.substring(3, 6);
a3 = a.substring(6, 9);
a4 = a.substring(9, 12);
a5 = a.substring(12, 15);
a6 = a.substring(15, 18);

let arrayCodons = [a1, a2, a3, a4, a5, a5];

let b = "CCUCGCCGGUACUUCUCG";
b1 = b.substring(0, 3);
b2 = b.substring(3, 6);
b3 = b.substring(6, 9);
b4 = b.substring(9, 12);
b5 = b.substring(12, 15);
b6 = b.substring(15, 18);

let arrayCodons2 = [b1, b2, b3,b4, b5, b5];

function proteinName(codon) {
  let name;
  switch (codon) {
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      name = "Sérine";
      break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      name = "Proline";
      break;
    case "UUA":
    case "UUG":
      name = "Leucine";
      break;
    case "UUU":
    case "UUC":
      name = "Phénylalanine";
      break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      name = "Arginine";
      break;
    default:
      name = "Tyrosine";
      break;
  }
  return name;
}


function acideAmine1(arn) {
  let arrayCodons = [a1, a2, a3, a4, a5, a5];
  let name = [];
  for(let index in arrayCodons){
    name.push(proteinName(arrayCodons[index]));
  }
  return name.join("-");
}

function acideAmine2(arn) {
  let arrayCodons2 = [b1, b2, b3,b4, b5, b5];
  let name = [];
  for(let index in arrayCodons){
    name.push(proteinName(arrayCodons2[index]));
  }
  return name.join("-");
}

console.log(acideAmine1(a));
console.log(acideAmine2(b));





