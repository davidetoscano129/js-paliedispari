## Descrizione
Il programma deve:
- Chiedere all'utente di inserire una parola; 
- Utilizzare una funzione per verificarne la palindroma;
- Restituisce il risultato.

## Dati
- Input: una parola inserita dall'utente tramite prompt.
- Output:
  - Se la parola è palindroma: `La parola "<parola>" è palindroma`
  - Se la parola non è palindroma: `La parola "<parola>" non è palindroma`

## Esecuzione Logica
1. Richiesta dell'input
2. Funzione `isPalindrome(word)`:
   - Converte la parola in minuscolo per una verifica indipendente dalle maiuscole/minuscole.
   - Inverte la parola costruendo una versione rovesciata di essa.
   - Confronta la parola originale con la versione invertita.
   - Restituisce `true` se le due versioni coincidono, altrimenti `false`.
3. Output del risultato: 
   - Se la funzione restituisce `true`, viene stampato in console che la parola è palindroma.
   - Se la funzione restituisce `false`, viene stampato in console che la parola non è palindroma.
