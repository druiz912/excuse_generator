window.onload = function() {
  const who = [
    "Mi perro",
    "David Bisbal",
    "Spider-Man",
    "Manolo Escobar",
    "Winston Churchill"
  ];
  const what = [
    "se meó",
    "me ató a un contenedor",
    "se clavó un pelo en el ojo",
    "contrató a 20 guardaespaldas",
    "me arrestó"
  ];
  const where = [
    "en mi casa",
    "en Marbella",
    "en la playa de Matalascañas",
    "donde iba Messi para entrenar",
    "en Júpiter",
    "en el bar de abajo",
    "en Mordor."
  ];

  let sentence =
    who[numAle(who.length)] +
    " " +
    what[numAle(what.length)] +
    " " +
    where[numAle(where.length)];

  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = sentence;
};

function numAle(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
