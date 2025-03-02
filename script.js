const imagenesPredefinidas = [
    {
        url: "https://media.discordapp.net/attachments/1260633531542012025/1345559398805672006/image.png?ex=67c4fd57&is=67c3abd7&hm=039e5649f82c52437e955023845d5a97eb25901be022ded6b88f1975b3517a34&=&format=webp&quality=lossless&width=523&height=480",
        mensaje: "Pequeño cachondo anda suelto por Cordoba!!! Tengan cuidado, se hace pasar por pobre pero es para violar a la gente muchas bendiciones familias y tengan cuidado",
        titulo: "Pequeño violin suelto!!!"
    },
    {
        url: "https://media.discordapp.net/attachments/1326721773923991622/1345564543597674546/IMG-20240829-WA02592.jpg?ex=67c50222&is=67c3b0a2&hm=835ff19be560a167e20885ec4f3529ec2290dda0b7e6a6b85d26a4f46ce288aa&=&format=webp&width=269&height=480",
        mensaje: "Pequeño cachondo suelto por yapeyucity en busca de sexo",
        titulo: "Pequeño cachondo"
    },
    {
        url: "https://media.discordapp.net/attachments/1326721773923991622/1345564543211933708/IMG-20241124-WA01593.jpg?ex=67c50222&is=67c3b0a2&hm=c2384d2b58250a26805dcc5d409d93bcabd78ae58d97b29c0a5281af38a57996&=&format=webp&width=270&height=480",
        mensaje: "No se olviden que la chispa es una sola",
        titulo: "La chispa"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    imagenesPredefinidas.forEach(img => {
        crearElementoImagen(img.url, img.mensaje, img.titulo);
    });
});

function crearElementoImagen(url, mensaje, titulo) {
    const galeria = document.getElementById("galeria");
    
    const contenedor = document.createElement("div");
    contenedor.className = "imagen-contenedor";
    
    const imagen = document.createElement("img");
    imagen.src = url;
    imagen.alt = "Imagen troll";
    imagen.className = "imagen";
    
    imagen.onerror = function() {
        alert("No se pudo cargar la imagen. Verifica la URL.");
        contenedor.remove();
    };
    
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = "mensaje-troll";

    const tituloEl = document.createElement("h3");
    tituloEl.textContent = titulo || "XDDD";
    
    const mensajeP = document.createElement("p");
    mensajeP.textContent = mensaje || "Una imagen vale mas que mil palabras";
    
    mensajeDiv.appendChild(tituloEl);
    mensajeDiv.appendChild(mensajeP);
    
    const btnEliminar = document.createElement("button");
    btnEliminar.className = "eliminar-btn";
    btnEliminar.innerHTML = "×";
    btnEliminar.title = "Eliminar imagen";
    btnEliminar.onclick = function() {
        galeria.removeChild(contenedor);
    };
    
    contenedor.appendChild(imagen);
    contenedor.appendChild(mensajeDiv);
    contenedor.appendChild(btnEliminar);
    galeria.appendChild(contenedor);
}

function agregarImagenPersonalizada() {
    const url = document.getElementById("imageURL").value.trim();
    
    if (url) {
        const mensajesTroll = [
            "nico gay",
            "marcela putita",
            "nico",
            "test",
            "h"
        ];
        
        const titulosTroll = [
            "Un gay captado en camara",
            "Marcela flores muños analia",
            "XD",
            "Nico gat",
            "Efrainsito flores"
        ];
        
        const mensajeRandom = mensajesTroll[Math.floor(Math.random() * mensajesTroll.length)];
        const tituloRandom = titulosTroll[Math.floor(Math.random() * titulosTroll.length)];
        
        crearElementoImagen(url, mensajeRandom, tituloRandom);
        
        document.getElementById("imageURL").value = "";
    } else {
        alert("Por favor, ingresa una URL valida.");
    }
}

document.getElementById("imageURL").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarImagenPersonalizada();
    }
});
