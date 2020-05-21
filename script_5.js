const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Question 1:
console.log("Est-ce que tous les livres ont été au moins empruntés une fois?");

function rentedTrue(){
  return books.every(i => i.rented > 0);
}

console.log(rentedTrue())

console.log(`\n`);

//Question 2:
console.log("Quel est livre le plus emprunté ?");

let maxRented = Math.max.apply(Math, books.map(i => i.rented));
let result = books.find(i => i.rented === maxRented);
console.log(result.title);

console.log(`\n`);

//Question 3:
console.log("Quel est le livre le moins emprunté ?");

let minRented = Math.min.apply(Math, books.map(i => i.rented));
let result2 = books.find(i => i.rented === minRented);
console.log(result2.title);

console.log(`\n`);

//Question 4:
console.log("Trouve le livre avec l'ID: 873495");

let bookId = books.find(i => i.id === 873495);
console.log(bookId.title);

console.log(`\n`);

//Question 5:
console.log("Supprime le livre avec l'ID: 133712");

let bookId2 = books.find(i => i.id === 133712);

books.forEach(function(i){
  if (i.id === 133712) {
    delete i;
  }
  else {console.log(i);
  }
});

console.log(`Le livre avec l'ID: 133712 qui vient d'être supprimé est ${bookId2.title}`);

console.log(`\n`);

//Question 6:
console.log("Les livres par ordre alphabétique sauf celui à l'ID: 133712");

books.sort(function(a, b){
  let a1 = a.title;
  let b1 = b.title;
    if (a1 < b1) {return -1;}
    if (a1 > b1) {return 1;}
    return 0;
});

books.forEach(function(i){
  if (i.id === 133712) {
    delete i;
  }
  else {console.log(i);
  }
});





