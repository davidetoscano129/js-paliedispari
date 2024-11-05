// DATI
const userWord = prompt("Dimmi una parola e ti dirò se è palindroma", "anna");

// ESECUZIONE LOGICA
let isPal = isPalindrome(userWord);

function isPalindrome(word) {
    // Convertiamo la parola in minuscolo per evitare problemi con maiuscole/minuscole
    const lowerCaseWord = word.toLowerCase();
    
    // Inizializziamo la parola invertita
    let reverseWord = "";
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        reverseWord += lowerCaseWord[i];
    }
    
    // Verifichiamo se la parola originale è uguale a quella invertita
    return (reverseWord === lowerCaseWord);
}

// OUTPUT
if (isPal) {
    console.log(`La parola "${userWord}" è palindroma`);
} else {
    console.log(`La parola "${userWord}" non è palindroma`);
}