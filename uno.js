// 1.- Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar el número de elementos que diga el número (segundo parámetro)
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
// Salida: ['Manzana','Cebolla','Apio','Naranja']
class Basket{
    constructor(){
        this.mandado=[]
    }

    add(food){
        this.mandado.push(food)
    }

    remove(cantidad){
        for(var i =0; i<cantidad; i++){
            this.mandado.pop(this.mandado[i])
        }
    }
}

var canasta= new Basket()
canasta.add('Manzana')
canasta.add('Cebolla')
canasta.add('Apio')
canasta.add('Naranja')
canasta.add('Papaya')
canasta.add('Sandia')
canasta.add('Melón')

console.log(canasta)

canasta.remove(3)
console.log(canasta)
