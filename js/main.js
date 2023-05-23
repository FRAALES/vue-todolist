//ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no

const {createApp} = Vue;

//Dichiaro le variabili
let compitoBucato = {
    "text": 'Fare il bucato',
    "done": [true],
};

let compitoLetto = {
    "text": 'Fare il letto',
    "done": [true],
};

let cucinareCena = {
    "text": 'Cucinare cena',
    "done": [false],
};

let cucinarePranzo = {
    "text": 'Cucinare pranzo',
    "done": [false],
};

//creo la struttura dati
createApp ({
    data () {
        return{
            error: false,
            newTask: '',
            tasks: [
                compitoBucato.text,
                compitoLetto.text,
                cucinareCena.text,
                cucinarePranzo.text,
                
            ]
        }
    },
    methods: {

        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.


        aggiungiTask(){
            //console.log(this.newTask);
            if(this.newTask !== '' && this.newTask.length >= 5){
                this.tasks.unshift(this.newTask);
                this.error = false;
            } else {
                this.error = true;
            }
            this.newTask='';
        },


        //MILESTONE 2
        //Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.

        rimuoviTask(indice){
            //console.log(indice);
            this.tasks.splice(indice, 1);

        }
    }

}).mount('#app');


// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
