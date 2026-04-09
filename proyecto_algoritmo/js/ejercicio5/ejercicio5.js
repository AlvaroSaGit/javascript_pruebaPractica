
function validarUsuario(nombre, activo, rol) {
    
    // Si el usuario no esta activo, lo sacamos de una vez
    if (activo === false) {
        alert("No puedes entrar " + nombre + ", tu cuenta esta inactiva.");
        return; 
    }

    let permisos = "";
    let nivel = "";
    
    // Pasamos el rol a minusculas para que no importe si escriben con mayuscula
    let rolLimpio = rol.toLowerCase();

    // Aqui revisamos que rol tiene para darle sus permisos
    if (rolLimpio === "admin") {
        permisos = "Puedes hacer de todo en el sistema.";
        nivel = "Nivel 3";
    } 
    else if (rolLimpio === "editor") {
        permisos = "Puedes editar cosas, pero no borrar usuarios.";
        nivel = "Nivel 2";
    } 
    else if (rolLimpio === "lector") {
        permisos = "Solo puedes ver la informacion.";
        nivel = "Nivel 1";
    } 
    else {
        // Por si ponen un rol que no conocemos
        alert("Ese rol no existe.");
        return;
    }

    // Al final mostramos todo en una sola alerta
    alert(
        "ACCESO OK\n" +
        "Nombre: " + nombre + "\n" +
        "Nivel: " + nivel + "\n" +
        "Permisos: " + permisos
    );
}

validarUsuario("Holaapoyo",true,"admin");
