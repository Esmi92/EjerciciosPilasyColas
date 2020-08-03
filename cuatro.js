// 4.-  Un almacén tiene capacidad para apilar n contenedores. Cada contenedor tiene un número
// de identificación. Cuando se desea retirar un contenedor específico, deben retirarse
// primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro
// y regresarlos

class Warehouse{
    constructor(){
        this.pile1=[23,46,4,5,34,8,3,50]
        this.pile2=[]
        this.theContainer = ''

    }

search(value){
if(this.pile1.includes(value)){
    var containersToRemove= this.pile1.length - (this.pile1.indexOf(value)+1)
    return containersToRemove
}else{
    return 'No existe el contenedor en esta pila'
}
}

removeContainersOnTop(containersToRemove){
    for(var i=0;i<containersToRemove;i++){
    this.pile2.push(this.pile1[almacen.pile1.length-1])
    this.pile1.pop()
    }
}

getTheContainer(){
   this.theContainer = this.pile1[almacen.pile1.length-1]
   this.pile1.pop()
}

}

var almacen= new Warehouse()

console.log(almacen.pile1)
console.log(almacen.search(34))
almacen.removeContainersOnTop(3)
console.log(almacen)
almacen.getTheContainer()
console.log(almacen)
