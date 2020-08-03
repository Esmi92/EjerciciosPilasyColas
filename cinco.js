// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola 1: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 2: [ amarillo, rojo, azul, morado]
// Cola 3: [rosa, verde, negro, blanco]

class Queue {
    constructor() {
        this.inicial = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco']
        this.pares = []
        this.nones = []
    }


    assignNewQueue() {
        for (var i = 1; i < this.inicial.length; i++) {
            var valorEnQueue = this.inicial[i]
            if (colores.inicial.indexOf(valorEnQueue) % 2 == 0) {
                this.pares.push(valorEnQueue)
            } else {
                this.nones.push(valorEnQueue)
            }
        }
        this.inicial=[]
    }

}




var colores = new Queue()

console.log(colores.inicial)
colores.assignNewQueue()

console.log(colores.inicial)
console.log(colores.pares)
console.log(colores.nones)