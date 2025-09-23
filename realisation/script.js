
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
let round=8;
for (let i = 0; i < round; i++) {
  
let randomIndex = Math.floor(Math.random() * competense.length);
 

  let reponse = prompt("Entrez le code de : " + competense[randomIndex].nom);

  if (reponse === competense[randomIndex].code) {
    console.log("good"+competense[randomIndex].nom);
    score++;
    console.log("votre score est de : " +score +"/8"  );
  } else {
    console.log("bad" +competense[randomIndex].nom);
  }
  
}
console.log("votre score final est de : " + score  + "/8");







 

