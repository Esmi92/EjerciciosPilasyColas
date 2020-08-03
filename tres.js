// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta. 
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

class Viaje {
    constructor() {
        this.recorrido = []
    }
    setOrigin(origen) {
        if (this.recorrido.length == 0) {
            this.recorrido.push(origen)
        }
    }

    add(lugar) {
        if(this.recorrido.length>0){
        this.recorrido.push(lugar)}
    }

    endViaje(destino) {
        this.recorrido.push(destino)
    }

    regreso() {
        if(this.recorrido.length !=1){
      this.recorrido.pop()}
    }
}


var tonatico = new Viaje()

console.log('Inicia tu recorrido en:')
tonatico.setOrigin('Observatorio')
console.log(tonatico)

tonatico.add('Toluca')
console.log(tonatico)

tonatico.add('Metepec')
console.log(tonatico)

tonatico.add('Ixtapan de la Sal')
console.log(tonatico)

console.log('Has llegado a tu destino comparto tu trayectoria:')
tonatico.endViaje('Tonatico')
console.log(tonatico)

console.log('Comenzando tu regreso:')
tonatico.regreso()
console.log(tonatico)
tonatico.regreso()
console.log(tonatico)
tonatico.regreso()
console.log(tonatico)
tonatico.regreso()
console.log(tonatico)
tonatico.regreso()
console.log(tonatico)
