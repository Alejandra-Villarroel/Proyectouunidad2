function encriptar() {
  let texto = document.getElementById("texto").value;
  let parrafo = document.getElementById("parrafo");
  let inicio = document.getElementById("inicio");

  let textoCifrado = texto
    .replace(/a/gi, "vcbd")
    .replace(/e/gi, "klj")
    .replace(/i/gi, "pfd")
    .replace(/o/gi, "szx")
    .replace(/u/gi, "bntr");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    parrafo.textContent = "";
    inicio.src = "./img/enc22.png";
  } else {
    inicio.src = "./img/inicio1.png";
    alert("Debes ingresar un mensaje");
   
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let parrafo = document.getElementById("parrafo");
  let inicio = document.getElementById("inicio");

  let textoCifrado = texto
    .replace(/vcbd/gi, "a")
    .replace(/klj/gi, "e")
    .replace(/pfd/gi, "i")
    .replace(/szx/gi, "o")
    .replace(/bntr/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      parrafo.textContent = "";
      inicio.src = "./img/des32.png";
    } else {
      inicio.src = "./img/inicio1.png";
      alert("Debes ingresar un mensaje");
    
    }
}