class Jugador {
    constructor(nombre, equipo, posición, imagen){
        this.nombre = nombre
        this.equipo = equipo
        this.posición = posición
        this.imagen = imagen
    }
}

const jug1 = new Jugador ("Sthephen Curry", "Golden State Warriors", "Base", "Curry.jpg")
const jug2 = new Jugador ("Donovan Mitchell", "Utah Jazz", "Escolta", "Mitchell.jpg")
const jug3 = new Jugador ("LeBron James", "Los Ángeles Lakers", "Alero","James.jpg")
const jug4 = new Jugador ("Zion Williamson", "New Orleans Pelicans", "Ala-Pívot","Williamson.jpg")
const jug5 = new Jugador ("Joel Embiid", "Philadelphia 76ers", "Pívot", "Embiid.jpg")


let destacados = []

localStorage.getItem("destacados") ? destacados = JSON.parse(localStorage.getItem("destacados")) : destacados.push(jug1,jug2,jug3,jug4,jug5)
localStorage.setItem("destacados", JSON.stringify(destacados))



let divJugadores = document.getElementById("jugadores")

//Utilicé Sweet Alert para mostrar este mensaje

function mostrarJugadores(destacados){
  divJugadores.innerHTML=""
  destacados.forEach((Jugador) => {
    let nuevoJugador = document.createElement("div")
    nuevoJugador.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="assets/${Jugador.imagen}" class="card-img-top" alt="${Jugador.nombre}">
    <div class="card-body">
      <h5 class="card-title">${Jugador.nombre}</h5>
      <p class="card-text">${Jugador.equipo} - ${Jugador.posición}</p>
      <button type="button" class="btn btn-primary btnMostrar">Ver estadísticas</button>
    </div>
  </div>`
  divJugadores.append(nuevoJugador)
  let btnMuestra = document.getElementsByClassName("btnMostrar")
  for (let muestra of btnMuestra){
    muestra.addEventListener("click", () => {
      Swal.fire({
        title: `Este jugador está nominado al MVP`,
        text: `El ganador se conocerá a final de temporada`,
        imageUrl: `assets/JugadorAgregado.jpg`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "blue",
        color: "red",
      })
      })
  
  }
  

  
})

}




function jugadorAgregado (destacados) {
  let jugadorIngresado = prompt("Ingrese su candidato al MVP")
  let equipoIngresado = prompt("Ingrese el equipo en el que juega")
  let posiciónIngresada = prompt ("Ingrese la posición en la que juega")
  let jugadorCreado = new Jugador (jugadorIngresado, equipoIngresado, posiciónIngresada)
  destacados.push(jugadorCreado)
}

function guardarJugador (destacados){
  let jugInput = document.getElementById("jugadorInput")
  let equInput = document.getElementById("equipoInput")
  let posInput = document.getElementById("posiciónInput")
  let jugadorCreado = new Jugador (jugInput.value, equInput.value, posInput.value, "JugadorAgregado.jpg")
  destacados.push(jugadorCreado)
  localStorage.setItem("destacados", JSON.stringify(destacados))
  console.log(destacados)
  jugInput.value = ""
  equInput.value = ""
  posInput.value = ""
  mostrarJugadores(destacados)
}
//Utilicé toastify para mostrar mensaje una vez que se guarda un jugador
let btnGuardar = document.getElementById("guardarJugadorBtn")
btnGuardar.addEventListener("click", ()=>{
  guardarJugador(destacados)
  Toastify({
    text: "Tu jugador se agregó correctamente",
    duration: 2000,
    gravity: "bottom", 
    position: "center", 
    style: {
      background: "linear-gradient(to right, red, white, blue)",
      color: "black"
    },
    onClick: function(){}
  }).showToast();
  
})

let bntMostrarCatalogo = document.getElementById("mostrarJugadores")
bntMostrarCatalogo.addEventListener("click", ()=>{
  mostrarJugadores(destacados)
})

function ocultarCatalogo(){
  divJugadores.innerHTML = ""
}

let btnOcultarCatalogo = document.getElementById("ocultarJugadores")
btnOcultarCatalogo.addEventListener("click", ()=>{
  ocultarCatalogo()
})


localStorage.setItem("nombre", "Stephen Curry")
localStorage.setItem("equipo", "Golden State Warriors")
localStorage.setItem("posición", "Base")

let equipoJugador = localStorage.getItem("equipo")
console.log(equipoJugador)

let posiciónJugador = localStorage.getItem("posición")
console.log(posiciónJugador)

localStorage.setItem("miArray", destacados)

let arr = localStorage.getItem("miArray")
console.log(arr)

localStorage.removeItem("equipo")

let btnBlueMode = document.getElementById("botonBlueMode")
let btnRedMode = document.getElementById("botonRedMode")
let btnWhiteMode = document.getElementById("botonWhiteMode")

let modoRojo

localStorage.getItem("blueMode") ? modoRojo = localStorage.getItem("blueMode") : localStorage.setItem("blueMode", false)
if(modoRojo == "true"){
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "black"
}else{
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}


btnBlueMode.addEventListener("click", ()=>{
  console.log("Funciona boton azul")
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "black"
  localStorage.setItem("blueMode", true)
})
btnRedMode.addEventListener("click", ()=>{
  console.log("Funciona boton rojo")
  document.body.style.backgroundColor = "red"
  document.body.style.color = "black"
  localStorage.setItem("blueMode", false)
})
btnWhiteMode.addEventListener("click", ()=>{
  console.log("Funciona boton blanco")
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
  localStorage.setItem("blueMode", false)
})

let jugador1JSON = JSON.stringify(jug1)
localStorage.setItem("objetoJugadorJSON", jugador1JSON)

let jugadorStorageJSON = JSON.parse(localStorage.getItem("objetoJugadorJSON")) || []
console.log(jugadorStorageJSON)


const {nombre,equipo} = jug1
console.log(nombre)
console.log(equipo)


const {nombre:player, equipo:team, posición:position} = jug4
console.log(player)
console.log(team)
console.log(position)


let [a,b,c] = destacados
console.log(a)
console.log(b)
console.log(c)



const jugInfo1 = {
  ...jug1,
  zapatillas: "Under Armor",
  títulos: 4,
  premios: 2

}
const jugInfo2 = {
  ...jug2,
  zapatillas: "Adidas",
  títulos: 0,
  premios: 0

}

const jugInfo3 = {
  ...jug3,
  zapatillas: "Nike",
  títulos: 4,
  premios: 4

}

const jugInfo4 = {
  ...jug4,
  zapatillas: "Nike",
  títulos: 0,
  premios:0

}

const jugInfo5 = {
  ...jug5,
  zapatillas: "Air Jordan",
  títulos: 0,
  premios: 0

}

//Utilicé Luxon para agregar la fecha en tiempo real

const DateTime = luxon.DateTime

const fechaActual = DateTime.now()
console.log(fechaActual)
console.log(fechaActual.day)
console.log(fechaActual.hour)


let divFechaHoy = document.getElementById("fechaHoy")
let fecha = fechaActual.toLocaleString(DateTime.DATE_HUGE)
divFechaHoy.innerHTML = `${fecha}`


































