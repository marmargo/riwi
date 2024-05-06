let mascotas = [
    {
        nombre: "Luna",
	imagen: "./public/img/luna.jpg",
        propietario: "Sebastian",
        documento: "1036670040",
        telefono: "3662290",
        correo: "juan@gmail.com"
    },
    {
        nombre: "Tobias",
	imagen: "./public/img/tobias.jpeg",
        propietario: "Mariana",
        documento: "1036670042",
        telefono: "3662294",
        correo: "marimarhola16@gmail.com"
    },
    {
        nombre: "coca colo",
	imagen: "./public/img/cocacolo.avif",
        propietario: "Santiago",
        documento: "1036670041",
        telefono: "3662291",
        correo: "santiago@gmail.com"
    },
    {
        nombre: "queso",
	imagen: "./public/img/queso.jpeg",
        propietario: "Santiago",
        documento: "1036670041",
        telefono: "3662292",
        correo: "santiago@gmail.com"
    },
    {
        nombre: "manguito",
	imagen: "./public/img/manguito.jpeg",
        propietario: "Jose luis",
        documento: "1036670045",
        telefono: "3662299",
        correo: "jluismunevar@gmail.com"
    },
    {
        nombre: "perro",
	imagen: "./public/img/perro.jpg",
        propietario: "Sara",
        documento: "1036670046",
        telefono: "3662298",
        correo: "sara@gmail.com"
    },
    {
        nombre: "papita frita",
	imagen: "./public/img/papita.jpeg",
        propietario: "Saray",
        documento: "1036670043",
        telefono: "3662296",
        correo: "sary@gmail.com"
    },
    {
        nombre: "lola",
	imagen: "./public/img/lola.avif",
        propietario: "brian",
        documento: "1036670695",
        telefono: "3662297",
        correo: "br89a@gmail.com"
    },
    {
        nombre: "polo",
	imagen:"./public/img/polo.jpg",
        propietario: "daniel",
        documento: "1036670070",
        telefono: "3662289",
        correo: "dani@gmail.com"
    },
    {
        nombre: "Lulu",
	    imagen: "./public/img/lulu.jpg",
        propietario: "luisa",
        documento: "1036670040",
        telefono: "3662288",
        correo: "lululu@gmail.com"
    }
];
// Función para eliminar una mascota del array
// function eliminarMascota(nombre) {
//     const index = mascotas_principales.mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
//     if (index !== -1) {
//         mascotas.splice(index, 1);
//         console.log("Mascota eliminada exitosamente.");
//     } else {
//         console.log("Mascota no encontrada.");
//     }
// }

// function generarTarjetaMascota(mascota) {
//     return `
//        <div class="flip-card">
//             <div class="flip-card-inner">
//                 <div class="flip-card-front">
//                     <h2>${mascota.nombre}</h2> <!-- Aquí agregamos el título en la parte frontal -->
//                 </div>
//                 <div class="flip-card-back">
//                     <h3>${mascota.propietario}</h3> <!-- Aquí repetimos el título en la parte trasera -->
//                     <p>Documento: ${mascota.documento}, Teléfono: ${mascota.telefono}, Correo: ${mascota.correo}, ${mascota.descripcion}</p>
//                 </div>
//             </div>
//         </div>`;
//     }

// function agregarTarjetasMascotas() {
//         const contenedor = document.querySelector('.formulario'); 
//         mascotas.forEach(mascota => {
//             const tarjetaHTML = generarTarjetaMascota(mascota);
//             contenedor.innerHTML += tarjetaHTML;
//         });
//     }
    
// window.onload = agregarTarjetasMascotas;