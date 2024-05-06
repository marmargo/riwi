import *  as mascotas_principales from './main.js';

document.getElementById("registrar_mascota").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const raza = document.getElementById("raza").value;
    const fechaNacimiento = document.getElementById("raza").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const estado = document.getElementById("opcion").value;
    const propietarioNombre = document.getElementById("propietario_nombre").value;
    const propietarioDocumento = document.getElementById("numero_identidad").value;
    const propietarioTelefono = document.getElementById("telefono").value;
    const propietarioCorreo = document.getElementById("email").value;
    const mascota = {
        nombre,
        especie,
        raza,
        fechaNacimiento,
        peso,
        estado,
        propietario: {
            nombre: propietarioNombre,
            documento: propietarioDocumento,
            telefono: propietarioTelefono,
            correo: propietarioCorreo}
    };

    mascotas_principales.mascotas.push(mascota);
    return mascota;})

console.log(mascotas_principales.mascotas);