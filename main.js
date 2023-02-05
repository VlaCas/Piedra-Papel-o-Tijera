const listImg = [["file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/piedra-a.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/papel-a.png",
    "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/tijera-a.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/piedra-b.png",
    "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/papel-b.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/tijera-b.png"], [
    "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/piedra-a-cargando.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/papel-a-cargando.png", 
    "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/tijera-a-cargando.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/piedra-b-cargando.png", 
    "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/papel-b-cargando.png", "file:///C:/Users/Administrador/Documents/GitHub/Piedra--Papel-o-Tijera-/imagenes/tijera-b-cargando.png"]]

let posImg = 0;
let esperandoJuego = () => {ejecucion = setInterval(() => {posImg = (posImg + 1) % (listImg[1].length / 2); document.getElementById("imagen-a").src = listImg[1][posImg]; 
    document.getElementById("imagen-b").src = listImg[1][posImg + 3]}, 0350)}; esperandoJuego();

let reinicio = () => { esperandoJuego(); 
    document.getElementById("tablero").style = "opacity: 0.3; visibility: visible;"; document.getElementById("imagen-a").style = "border: 4px solid rgb(88, 88, 88); background-color: rgba(88, 88, 88, 0.2) transition: border, background-color, visibility 1s ease;";
    document.getElementById("imagen-b").style = "border: 4px solid rgb(88, 88, 88); background-color: rgba(88, 88, 88, 0.2)"; document.getElementById("interrogante").style = "visibility: visible";
    document.getElementById("interrogante2").style = "visibility: visible"; document.getElementById("contenedor-opciones-a").style = "visibility: visible;"; document.getElementById("historial").style = "opacity: 0.3; visibility: visible;";}

let decidirQuienGano = (jug,com) => {let resultado = document.getElementById("resultado"); jug == listImg[0][0] && com == listImg[0][3] ? resultado.innerHTML = "Empate" : jug == listImg[0][1] && com == listImg[0][4] ?
    resultado.innerHTML = "Empate" : jug == listImg[0][2] && com == listImg[0][5] ? resultado.innerHTML = "Empate" : jug == listImg[0][0] && com == listImg[0][4] ? resultado.innerHTML = "Perdiste...":
    jug == listImg[0][1] && com == listImg[0][5] ? resultado.innerHTML = "Perdiste..." : jug == listImg[0][2] && com == listImg[0][3] ? resultado.innerHTML = "Perdiste...": jug == listImg[0][0] && com == listImg[0][5] ?
    resultado.innerHTML = "¡Ganaste!" : jug == listImg[0][1] && com == listImg[0][3] ? resultado.innerHTML = "¡Ganaste!": resultado.innerHTML = "¡Ganaste!"; setTimeout(reinicio,2000)}; let ctaVic = [0,0]; let listHis = [];

let historial = (img1,img2) => { ctaVict = document.getElementById("resultado").innerHTML; ctaVict == "¡Ganaste!" ? ctaVic[0]++ : ctaVict == "Perdiste..." ? ctaVic[1]++ : console.log("empate");
    document.getElementById("ctaJug").innerHTML = "Jugador " + `${ctaVic[0]}`; document.getElementById("ctaCom").innerHTML = `${ctaVic[1]}` + " Computadora"; listHis.unshift(img1, img2); 
    document.getElementById("imgHis1").src = listHis[0]; document.getElementById("imgHis2").src = listHis[1]; if (listHis.length >=3) {document.getElementById("imgHis3").src = listHis[2]; document.getElementById("imgHis4").src = listHis[3];} 
    if (listHis.length >=5) {document.getElementById("imgHis5").src = listHis[4]; document.getElementById("imgHis6").src = listHis[5];} if (listHis.length >=7) {document.getElementById("imgHis7").src = listHis[6]; document.getElementById("imgHis8").src = listHis[7];}
    if (listHis.length >=9) {document.getElementById("imgHis9").src = listHis[8]; document.getElementById("imgHis10").src = listHis[9];}}
    
let jugada = (opcion) => {clearInterval(ejecucion); let jug = document.getElementById("imagen-a").src = listImg[0][opcion]; let com = document.getElementById("imagen-b").src = listImg[0][Math.random() <= 0.33 ? 3 : Math.random() >= 0.66 ? 4 : 5];
    document.getElementById("imagen-a").style = "border: 4px solid rgb(171, 29, 28); background-color: rgba(241,93,83,0.2)"; document.getElementById("interrogante").style = "visibility: hidden"; document.getElementById("historial").style =
    "visibility: visible"; document.getElementById("tablero").style = "visibility: visible"; document.getElementById("imagen-b").style = "border: 4px solid rgb(0, 120, 183); background-color: rgba(54,204,233,0.2)"; 
    document.getElementById("interrogante2").style = "visibility: hidden"; document.getElementById("contenedor-opciones-a").style = "visibility: hidden;";  decidirQuienGano(jug,com); historial(jug,com)}