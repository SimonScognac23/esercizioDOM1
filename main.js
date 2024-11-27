


// Funzione che mi permette di cambiare il colore dei paragrafi in modo del tutto casuale casuale
function cambiaColoreParagrafi() {
    // Funzione interna per generare un colore casuale RGB
    //  RGB (rosso verde blu) Sebbene non ci sia un utilizzo diretto di CSS per creare il colore, il valore che viene restituito dalla funzione è una stringa nel formato rgb(r, g, b), che rappresenta un colore che può essere usato in CSS per colorare un elemento.
    function coloreRandom() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`; // con il return ci facciamo ritornare le tre variabili r-g-b
    }

    // Seleziona tutti i paragrafi tramite il querySelectorAll, che mi permette di catturare tutti gli elementi html che condividono lo stesso selettore e li mette dentro una nodelist
    // una node-list è un array-like,ovvero un oggetto simile ad un array ma non è un array, e quindi non posso applicare i metodi degli array, tranne per il for-each che andremo ad applicare dopo
    let paragrafi = document.querySelectorAll('p');

    // Cambiamo il colore di ogni paragrafo in modo casuale richiamando il metodo coloreCasuale()
    paragrafi.forEach(paragrafo => {
        paragrafo.style.color = coloreRandom();
    });
}






// funzione che mi permette di rendere in grassetto i paragrafi
function rendereInGrassetto() {
    const paragrafi = document.querySelectorAll('p');  // Seleziona tutti i paragrafi

    // Cicla attraverso ogni paragrafo
    paragrafi.forEach(paragrafo => {
        // Se il paragrafo è già in grassetto (fontWeight è 'bold'), lo rimettiamo normale
        if (paragrafo.style.fontWeight === 'bold') {
            paragrafo.style.fontWeight = 'normal'; // Rende il testo normale
        } else {
            paragrafo.style.fontWeight = 'bold';  // Rende il testo in grassetto
        }

        // paragrafo è un oggetto che rappresenta un paragrafo HTML, è stato selezionato prima nel codice con document.querySelectorAll('p')
        // style: è l'insieme di tutte le proprietà CSS di ogni paragrafo che abbiamo catturato tramite il querySelectorAll
        // 'bold' :  è il valore che viene assegnato alla proprietà fontWeight, ossia il grassetto
    });
}





// Funzione per nascondere e far riapparire i paragrafi
function mostraNascondiParagrafi() {
    const paragrafi = document.querySelectorAll('p');  // Seleziona tutti i paragrafi

    // Cicla attraverso ogni paragrafo sempre tramite il forEach e all'interno creiamo un ciclo for che mi permette di far apparire e scomparire il paragrafo
    paragrafi.forEach(paragrafo => {
        // Se il paragrafo è visibile lo nascondiamo, altrimenti lo mostriamo
        if (paragrafo.style.display === 'none') {
            paragrafo.style.display = 'block';  // Mostra il paragrafo
        } else {
            paragrafo.style.display = 'none';  // Nasconde il paragrafo
        }
    });
}










