function afficherMessage() {
let codes = ["C1", "C3", "C2", "C1", "C8", "C2", "C1"];
let codeChoiser =prompt("Entrez le code à chercher (C1, C2, C8) :") ;

let compteur = 0;

for (let i = 0   ;  i < codes.length   ; i++) {
  if (codes[i] === codeChoiser) {
    compteur++;
  }
}
}
afficherMessage();