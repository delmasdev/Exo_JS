const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//Question 1:
console.log("Les entrepreneurs qui sont nés dans les années 70:");

entrepreneurs.forEach(function(i) {
    if (i.year >= "1970" && i.year < "1980") {
      console.log(i);

    }
});

console.log(`\n`);

//Question 2:
console.log("Voici un array qui contient le prénom et le nom des entrepreneurs:");

entrepreneurs.map(function(i) {
  console.log({first: i.first, last: i.last});
});

console.log(`\n`);

//Question 3:
console.log("Quel âge aurait chaque inventeur aujourd'hui:");

function age_now(year){
  let year_now = 2020;
  return (year_now - year);
}

entrepreneurs.forEach(function(i) {
  console.log(`${i.first} ${i.last} a ${age_now(i.year)} ans aujourd'hui.`);
});

console.log(`\n`);

//Question 4:
console.log("Trier les entrepreneurs par ordre alphabétique du nom de famille:");

entrepreneurs.sort(function(a, b){
  let a1 = a.last;
  let b1 = b.last;
    if (a1 < b1) {return -1;}
    if (a1 > b1) {return 1;}
    return 0;
});

entrepreneurs.forEach(function(i) {
  console.log(i);
});




