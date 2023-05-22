//ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no

const {createApp} = Vue;

//Dichiaro le variabili
let compitoBucato = {
    "text": ['Fare il bucato'],
    "done": [true, false],
};

let compitoLetto = {
    "text": ['Fare il letto'],
    "done": [true, false],
};


createApp ({
    data () {
        return{
            error: false,
            newTask: '',
            tasks: [
                compitoBucato.text,
                compitoLetto.text,
            ]
        }
    },
    methods: {
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
        rimuoviTask(indice){
            //console.log(indice);
            this.tasks.splice(indice, 1);

        }
    }

}).mount('#app');


// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
