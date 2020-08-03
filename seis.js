// 6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo,
// llegada la hora de inicio hay muchos "colados", es por esto que se le ordena al vigilante
// que retire a todos aquellos que no tienen ticket. Muestre la cola inicial, qué elementos
// fueron retirados de la cola y la cola final. Sugerencia: desencole cada elemento, si tiene
// ticket se vuelve a encolar, sino se retira. 

var cola = [{ user: 'User1', ticket: true }, { user: 'User2', ticket: true }, { user: 'User3', ticket: false }, { user: 'User4', ticket: true }, { user: 'User5', ticket: false }, { user: 'User6', ticket: false }, { user: 'User7', ticket: true }, { user: 'User8', ticket: true }, { user: 'User9', ticket: true }, { user: 'User10', ticket: false }, { user: 'User11', ticket: true }]
const conTkt = []

function verificar() {
    for (var i = 0; i < cola.length; i++) {
        if (cola[i].ticket == true) {
            var agrega = conTkt.push(cola[i])
            agrega
        }
    }
}

function volarColados(){
    cola= []
    cola= conTkt

}

verificar()
console.log(cola)
console.log(conTkt)

volarColados()
console.log(cola)

