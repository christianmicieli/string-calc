
const removeSpaces = require ('./operations').removeSpaces
const concat = require ('./operations').concat


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function string () {
  console.log ("\nOperazioni disponibili: \n 0.Per Uscire \n 1.Rimozione Spazi \n 2.Concatenaizone stringhe\n ");

  readline.question('Che operazione vuoi eseguire? ', op =>{
  
        switch(op){
          case '0':
            console.log("Grazie per aver usato la nostra calcolatrice <3\n");
            readline.close();
            return;
          case '1':  
            readline.question('Inserisci la stringa: ', str1 => {
              console.log("Risultato rimozione spazi:", removeSpaces( str1));
              string();
            });
            break;
          case '2':
            readline.question('Inserisci la prima stringa: ', str1 => {
              readline.question('Inserisci la seconda stringa: ', str2 => {
                console.log("Risultato concatenazione:", concat(str1, str2));
                string();
              });
            });
            break;
            
          default:
            console.log('Operazione non valida');

        } 
      
  });

}

string();
