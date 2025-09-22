
const competense = [
  { nom: "Introduction à l'analyse", code: "C1" },
  { nom: "Bases de la programmation", code: "C2" },
  { nom: "Conception d'interface utilisateur", code: "C3" },
  { nom: "Bases de données", code: "C4" },
  { nom: "Réseaux", code: "C5" },
  { nom: "Sécurité informatique", code: "C6" },
  { nom: "Gestion de projets", code: "C7" },
  { nom: "Optimisation pour les moteurs de recherche", code: "C8" },
];
let score = 0;

for (let i = 0; i < competense.length; i++) {

  let reponse = prompt("Entrez le code de : " + competense[i].nom);

  if (reponse === competense[i].code) {
    console.log("good"+competense[i].nom);
    score++;
    console.log("votre score est de : " + "8" +"/" +score);
  } else {
    console.log("bad");
  }
  
}
console.log("votre score final est de : " + score +"/" + "8");








